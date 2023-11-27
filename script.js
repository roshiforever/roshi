document.getElementById('drawFlowerBtn').addEventListener('click', function() {
    
    var letterContainer = document.getElementById('apologyLetterContainer');
    letterContainer.style.display = (letterContainer.style.display === 'none' || letterContainer.style.display === '') ? 'block' : 'none';
});

document.getElementById('letterBtn').addEventListener('click',function(){
    window.location.href = 'letter/letter.html'
});
document.getElementById('killBtn').addEventListener('click',function(){
    window.location.href = 'killme/killme.html'
});
document.getElementById('gameBtn').addEventListener('click',function(){
    window.location.href = 'games_home.html'
});


document.getElementById('backToMainBtn').addEventListener('click', function() {
    
    document.getElementById('apologyLetterContainer').style.display = 'none';
});

document.getElementById('cuddleBtn').addEventListener('click', function() {
    
    Swal.fire({
        title: "Sending virtual huggies and cuddles 🤗", 
        imageUrl: 'cuddle.gif', 
        imageAlt: 'Cuddle GIF',
        showCancelButton: false, 
        confirmButtonText: "Close",
        confirmButtonColor: "#6495ED", 
        reverseButtons: true,
    });
});

document.getElementById('playAudioBtn').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');

    
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
    } else {
        
        audioPlayer.pause();
    }
});
const timerDuration = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
        let timerStart;

        function startMarryMeTimer() {
            document.getElementById('marryMeBtn').disabled = true;
            document.getElementById('timerDisplay').style.display = 'block';
            
            timerStart = new Date().getTime();
            updateMarryMeButtonState();
        }

        function updateMarryMeButtonState() {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - timerStart;

            if (elapsedTime >= timerDuration) {
                document.getElementById('timerDisplay').innerHTML = "Time's up! Marry Me!";
            } else {
                const remainingTime = timerDuration - elapsedTime;
                const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
                const remainingHours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                const remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
                const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

                const timerString = `I will give and show everything in this relationship with in ${remainingDays}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
                document.getElementById('timerDisplay').innerHTML = timerString;

                setTimeout(updateMarryMeButtonState, 1000);
            }
        }

        function disableletterMeButton() {
            const marryMeBtn = document.getElementById('letterBTN');
            marryMeBtn.disabled = true;
            marryMeBtn.innerHTML = 'Button Disabled';
            marryMeBtn.style.opacity = 0.5;}