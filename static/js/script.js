document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('checkBeerTime');
    const resultElement = document.getElementById('result');
    const jokeElement = document.getElementById('joke');
    let retryCount = 0;
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? He was outstanding in his field!",
        "Why don't eggs tell jokes? They'd crack each other up!"
    ];

    checkButton.addEventListener('click', checkBeerTime);

    function checkBeerTime() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 16) {
            resultElement.textContent = "Yes, it's Beer Time! 🍻";
            resultElement.style.color = 'green';
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            jokeElement.textContent = randomJoke;
            retryCount = 0;
        } else {
            resultElement.textContent = "Not yet, wait until after 4 PM.";
            resultElement.style.color = 'red';
            retryCount++;

            if (retryCount >= 3) {
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                jokeElement.textContent = randomJoke;
            } else {
                jokeElement.textContent = '';
            }
        }
    }
});
