document.getElementById('playMusic').addEventListener('click', function() {
  const music = document.getElementById('backgroundMusic');
  if (music.paused) {
      music.play();
      this.textContent = 'Pause Music';
  } else {
      music.pause();
      this.textContent = 'Play Music';
  }
});

// Countdown Timer
const countdownTimer = document.getElementById('countdownTimer');
const targetDate = new Date();
targetDate.setFullYear(targetDate.getFullYear() + 1);

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (difference <= 0) {
      clearInterval(interval);
      countdownTimer.textContent = "Happy Anniversary Again! 🎉";
  }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Show Cake Button
const showCakeButton = document.getElementById('Tiup Dulu');
const cakeImage = document.getElementById('cakeImage');

showCakeButton.addEventListener('click', function () {
  cakeImage.style.display = 'block';
  setTimeout(() => {
      cakeImage.style.opacity = '1';
  }, 100);
});

const showVideoButton = document.getElementById('showVideo');
const videoSection = document.getElementById('videoSection');

showVideoButton.addEventListener('click', function () {
    videoSection.style.display = 'block';
    const video = document.getElementById('anniversaryVideo');
    video.play();
});
