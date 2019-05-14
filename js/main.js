// Make sure the DOM is loaded before executing JS
document.addEventListener("DOMContentLoaded", function() { 
  let buttons = document.getElementsByTagName("button");
  let hamburgerMenu = document.getElementById('js-hamburger-icon');
  let closeButton = document.getElementById('close-icon');
  let menu = document.getElementById("main-nav");
  let direction = "";

  function openHamburgerMenu() {
    if(direction === "top") {
      menu.style.height = "100%";
      menu.style.overflowY = "hidden";
    } else if (direction === "left") {
      menu.style.width = "100%";
    } else if (direction === "right") {
      menu.style.width = "100%";
    }
  }

  function closeHamburgerMenu() {
    if(direction === "right") {
      menu.style.width = "0";
      menu.removeAttribute("style");
    } else if (direction === "left") {
      menu.style.width = "0";
      menu.removeAttribute("style");
    } else if (direction === "top") {
      menu.style.height = "0"; 
      menu.removeAttribute("style");    
    }
  }

  // Set the appropriate css classes based on the direction selected by
  // calling the addAndRemoveStyles() function. The slide direction is
  // set by the user when they click a direction button. Valid values are
  // top, left, and right.
  function setOverlayDirectionStyles(slideDirection) {
    if(slideDirection === "top") {    
      addAndRemoveStyles(slideDirection, ["left","right"]); 
    } else if(slideDirection === "left") {
      addAndRemoveStyles(slideDirection, ["top","right"]);
    } else if(slideDirection === "right") {
      addAndRemoveStyles(slideDirection, ["top","left"]);
    }
  }

  // Add and/or remove classes based on the selected slide direction
  // and current css class setting
  function addAndRemoveStyles(slideDirection, directionArr) {
    let currentClass = menu.className;  
    
    // Check to see if current css class and user selected slide
    // direction are the same. If not, remove the current css class
    // and set it to the slide direction css class selected by the user.
    // It will either be top, left, or right.
    if(currentClass !== slideDirection) {
      if(currentClass === directionArr[0] || currentClass === directionArr[1] 
        || currentClass === "menu-overlay") {
        menu.classList.add(slideDirection);
        menu.classList.remove(currentClass);
      } else {
        menu.classList.add(slideDirection);
      }
    }
  }

  // Convert the collection of buttons into an array so event
  // listeners can be added for each button
  let buttonArray = Array.from(buttons);

  // Set an event listener for each button that will set the slide
  // direction selected by the user.
  buttonArray.forEach(function(button) {
    button.addEventListener("click", function() {
      direction = button.id;
      setOverlayDirectionStyles(direction);
    });
  });

  // Add event listener to the hamburger icon
  hamburgerMenu.addEventListener('click', function () { 
    openHamburgerMenu();
  });

  // Add even listener to the close menu icon
  closeButton.addEventListener('click', function() {
    closeHamburgerMenu();
  });

});