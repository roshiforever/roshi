const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const clickCountElement = document.getElementById("clickCount");

            let clickCount = 0;

const gifs = [
  "https://media.giphy.com/media/BWVw2C7whuSFCL8ATO/giphy.gif",
  "https://media.giphy.com/media/aRfmnHSOheokn8914H/giphy.gif",
  "https://media.giphy.com/media/VcKe87r5UxvUzO6lsm/giphy.gif",
  "https://media.giphy.com/media/3orif0HPtMKPs8su6Q/giphy.gif",
  "https://media.giphy.com/media/3o6Zt7xWCLZD8f5ZsY/giphy.gif",
  "https://media.giphy.com/media/3o6Ztl4ZkK5vbgXsmQ/giphy.gif",
  "https://media.giphy.com/media/3o6ZsSwLqF97shx0pG/giphy.gif",
  "https://media.giphy.com/media/26gJyLFIxdpupGLJu/giphy.gif",
  "https://media.giphy.com/media/8D1upwhhOTHo3UKhGy/giphy.gif",
  "https://media.giphy.com/media/688BJk8U3uzruOgy6Z/giphy.gif",
  "https://media.giphy.com/media/XbV2eCHp0mHthRjdJP/giphy.gif",
  "https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif",
  
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