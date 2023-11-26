document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "When Im with you!!",
        "I dont need anyone else in this world",
        "I wanna keep loving you",
        "I wanna keep holding you in my arms",
        "I wanna tie you permanently with me in this life",
        "I will marry you",
        "I love you"

    ];

    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
        
    }

    displayLyrics();
});

