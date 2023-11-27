let startTime;
let bestTime = Infinity;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function appearShape() {
    const shape = document.getElementById('shape');

    
    const topPosition = Math.random() * (window.innerHeight - 100);
    const leftPosition = Math.random() * (window.innerWidth - 100);

    shape.style.top = topPosition + 'px';
    shape.style.left = leftPosition + 'px';

    
    shape.style.backgroundColor = getRandomColor();

    
    shape.style.display = 'block';

   
    startTime = new Date().getTime();
}

function disappearShape() {
    const shape = document.getElementById('shape');
    const reactionTimeElement = document.getElementById('reaction-time');

    
    shape.style.display = 'none';

    
    const endTime = new Date().getTime();
    const reactionTime = endTime - startTime;

   
    reactionTimeElement.textContent = 'Your reaction time: ' + reactionTime + ' ms';

    
    bestTime = Math.min(bestTime, reactionTime);

    reactionTimeElement.textContent += ' | Best time: ' + bestTime + ' ms';

    
    setTimeout(appearShape, Math.random() * 2000);
}


setTimeout(appearShape, Math.random() * 2000);


document.getElementById('shape').addEventListener('click', disappearShape);