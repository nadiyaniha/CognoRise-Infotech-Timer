function setCountdown() {
    const targetDateInput = document.getElementById('datetime');
    const targetDate = new Date(targetDateInput.value);
    const now = new Date();
  
    if (targetDate <= now) {
      alert("Please select a future date and time.");
      return;
    }
  
    const countdownElement = document.getElementById('countdown');
    const targetTimeElement = document.getElementById('target-time');
    targetTimeElement.textContent = `Countdown to: ${targetDate.toLocaleString()}`;
  
    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Countdown expired!';
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
  