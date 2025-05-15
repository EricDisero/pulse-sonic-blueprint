
// This file contains the core functionality for the audio widgets
// It will be loaded and executed via the script tag in MethodSection.tsx

document.addEventListener('DOMContentLoaded', function() {
  const initializeAudioWidgets = () => {
    const audioBoxes = document.querySelectorAll('.audio-box');
    
    audioBoxes.forEach((box, index) => {
      const name = index === 0 ? "Alissa" : "Paul";
      
      // Find elements
      const playPauseBtn = box.querySelector('.play-btn');
      const playIcon = box.querySelector('.playIcon');
      const pauseIcon = box.querySelector('.pauseIcon');
      const toggleSwitch = box.querySelector('.toggle-switch');
      const trackTitle = box.querySelector('.trackTitle');
      const trackSubtitle = box.querySelector('.trackSubtitle');
      
      // Create audio elements
      const beforeAudio = new Audio();
      const afterAudio = new Audio();
      
      // Set sources based on the index
      if (index === 0) {
        beforeAudio.src = 'https://files.catbox.moe/hug00i.mp3';
        afterAudio.src = 'https://files.catbox.moe/kxdfc4.mp3';
      } else {
        beforeAudio.src = 'https://files.catbox.moe/xeyyvx.mp3';
        afterAudio.src = 'https://files.catbox.moe/72bdae.mp3';
      }
      
      let isPlaying = false;
      let isAfter = false;
      
      // Sync playback between before/after tracks
      function syncPlayback() {
        afterAudio.currentTime = beforeAudio.currentTime;
      }
      
      // Toggle play/pause
      function togglePlay() {
        if (!isPlaying) {
          beforeAudio.play();
          afterAudio.play();
          playIcon.style.display = "none";
          pauseIcon.style.display = "block";
          isPlaying = true;
        } else {
          beforeAudio.pause();
          afterAudio.pause();
          playIcon.style.display = "block";
          pauseIcon.style.display = "none";
          isPlaying = false;
        }
      }
      
      // Event listeners
      playPauseBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        togglePlay();
      });
      
      toggleSwitch.addEventListener('click', () => {
        isAfter = !isAfter;
        box.classList.toggle('active');
        
        if (isAfter) {
          beforeAudio.muted = true;
          afterAudio.muted = false;
          syncPlayback();
          trackTitle.innerText = `${name} Track`;
          trackSubtitle.innerText = "After AI Tone Tracing";
        } else {
          beforeAudio.muted = false;
          afterAudio.muted = true;
          syncPlayback();
          trackTitle.innerText = `${name} Track`;
          trackSubtitle.innerText = "Before AI Tone Tracing";
        }
      });
      
      // Set default state
      beforeAudio.muted = false;
      afterAudio.muted = true;
    });
  };
  
  // Initialize widgets when the DOM is loaded
  initializeAudioWidgets();
});
