document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
  
    const handleShake = (button) => {
      const shakeText = button.querySelector(".shake-text");
      shakeText.classList.add("shake");
  
      // Remove the animation class after the animation ends
      shakeText.addEventListener("animationend", function() {
        shakeText.classList.remove("shake");
      }, { once: true });
    };
  
    nextButton.addEventListener("click", function() {
      handleShake(nextButton);
    });
  
    prevButton.addEventListener("click", function() {
      handleShake(prevButton);
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myBtn");
    const shakeIcon = myButton.querySelector(".shake-icon");
  
    myButton.addEventListener("click", function() {
      shakeIcon.classList.add("shake");
  
      // Odstranění třídy animace po skončení animace
      shakeIcon.addEventListener("animationend", function() {
        shakeIcon.classList.remove("shake");
      }, { once: true });
    });
  });
  