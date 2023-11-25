document.getElementById('drawFlowerBtn').addEventListener('click', function() {
    
    var letterContainer = document.getElementById('apologyLetterContainer');
    letterContainer.style.display = (letterContainer.style.display === 'none' || letterContainer.style.display === '') ? 'block' : 'none';
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


