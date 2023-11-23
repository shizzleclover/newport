function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      const body = document.body;
    
      // Toggle menu and icon classes
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    
      // Toggle dark mode class on the body
      body.classList.toggle("dark-mode");
    }
    
    // You can add an event listener to a button or icon that triggers the toggleMenu function
    // For example, if you have a button with an ID of "toggleButton":
    // const toggleButton = document.getElementById("toggleButton");
    // toggleButton.addEventListener("click", toggleMenu);
    
  }