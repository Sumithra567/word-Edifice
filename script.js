let score = 0;
const wordsList = ["apple", "elephant", "tiger", "rabbit", "tree", "egg", "grape", "eagle", "engine", "orange"];

document.getElementById("submitBtn").addEventListener("click", () => {
    const userWord = document.getElementById("userWord").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (!userWord) {
        resultDiv.textContent = "Please enter a word!";
        return;
    }

    const lastLetter = userWord[userWord.length - 1];
    const nextWord = wordsList.find(word => word[0] === lastLetter);

    if (nextWord) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        resultDiv.textContent = `Next word: ${nextWord}`;
    } else {
        resultDiv.textContent = "No matching word found!";
    }

    document.getElementById("userWord").value = "";
});
