document.getElementById('drawFlowerBtn').addEventListener('click', function() {
    // Toggle the visibility of the apology letter container
    var letterContainer = document.getElementById('apologyLetterContainer');
    letterContainer.style.display = (letterContainer.style.display === 'none' || letterContainer.style.display === '') ? 'block' : 'none';
});

document.getElementById('backToMainBtn').addEventListener('click', function() {
    // Hide the apology letter container when the back button is clicked
    document.getElementById('apologyLetterContainer').style.display = 'none';
});

document.getElementById('cuddleBtn').addEventListener('click', function() {
    // Display the GIF inside a SweetAlert2 modal
    Swal.fire({
        title: "Sending virtual huggies and cuddles 🤗", // Text to be displayed
        imageUrl: 'cuddle.gif', // Replace with the actual path to your GIF
        imageAlt: 'Cuddle GIF',
        showCancelButton: false, // Set to true if you want a "Cancel" button
        confirmButtonText: "Close",
        confirmButtonColor: "#6495ED", // Customize the button color
        reverseButtons: true,
    });
});

document.getElementById('playAudioBtn').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');

    // Check if the audio is paused or has ended
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
    } else {
        // Pause the audio if it's currently playing
        audioPlayer.pause();
    }
});

// Rest of your existing JavaScript code...
