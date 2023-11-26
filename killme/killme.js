const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const clickCountElement = document.getElementById("clickCount");

            let clickCount = 0;

const gifs = [
  "https://media.giphy.com/media/VcKe87r5UxvUzO6lsm/giphy.gif",
  "https://media.giphy.com/media/aRfmnHSOheokn8914H/giphy.gif",
  
];

yesBtn.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * gifs.length);
  gif.src = gifs[randomIndex];
  question.innerHTML = "RIP RISHIKESH - 2003 TO 2023";
  
  clickCount++;
                clickCountElement.textContent = clickCount;
                if (clickCount === 1) {
                  counter.style.display = "block";
              }
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});