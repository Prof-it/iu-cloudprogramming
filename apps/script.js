document.addEventListener('DOMContentLoaded', function () {
    animateText('line1', 'Welcome to Cloud Programming.');
    setTimeout(() => {
      animateText('line2', 'Prof. Dr. rer. nat. Tianxiang Lu');
    }, 3000); // Delay the second line for 3 seconds
  });
  
  function animateText(id, text) {
    const line = document.getElementById(id);
    line.textContent = ''; // Clear existing text
    let index = 0;
  
    function writeText() {
      line.textContent += text[index];
      index++;
  
      if (index < text.length) {
        requestAnimationFrame(writeText);
      }
    }
  
    writeText();
  }
  