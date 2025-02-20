

  document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");
    const codeText = "/view-portfolio";
    let i = 0;
  
    function typeWriter() {
      if (i < codeText.length) {
        typingText.innerHTML += codeText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Add blinking cursor
        const cursor = document.createElement("span");
        cursor.classList.add("blinking-cursor");
        typingText.appendChild(cursor);
  
        // Show sections with smooth animation
        showSection(".home__container");
        showSection(".project__container");
        showSection(".section2");
        showSection(".contact");
        showSection(".under-section2")
        showSection(".under-section2-2")
        showSection(".section3")
        showSection(".under-section2-3")
        
      }
    }
  
    function showSection(selector) {
      const section = document.querySelector(selector);
      if (section) {
        section.style.display = "grid"; // First, change display
        setTimeout(() => {
          section.classList.add("show"); // Then trigger animation
        }, 50); // Small delay to allow CSS transition
      }
    }
  
    typeWriter();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const consoleNav = document.getElementById("console-nav");
    const inputField = document.getElementById("console-input");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 90) {
        consoleNav.style.top = "0"; // Show the console-nav after scrolling 100px
      } else {
        consoleNav.style.top = "-90px"; // Hide it again if less than 100px
      }
    });
  
    // Placeholder text switching logic every 5 seconds
    const placeholders = [
      "Type /about, /projects, /contact, /download-cv and press Enter...",
      "Try typing /download-cv to get my CV",
      "Use /about to learn more about me",
      "Type /projects to see my work",
      "Type /contact to reach out"
    ];
  
    let currentPlaceholderIndex = 0;
  
    setInterval(() => {
      currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
      inputField.placeholder = placeholders[currentPlaceholderIndex];
    }, 5000); // Change the placeholder every 5 seconds
  
    inputField.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission or new line
  
        const command = inputField.value.trim().toLowerCase(); // Get command
  
        if (command === "/about") {
          scrollToSection("about");
        } else if (command === "/projects") {
          scrollToSection("projects");
        } else if (command === "/contact") {
          scrollToSection("contact");
        } else if (command === "/download-cv") {
          downloadCV(); // Trigger the download when the command is /download-cv
        } else {
          inputField.value = "Unknown command"; // Show error message
          setTimeout(() => (inputField.value = ""), 1500); // Clear error after 1.5s
        }
      }
    });
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        inputField.value = ""; // Clear input after navigation
      }
    }
  
    function downloadCV() {
      const link = document.createElement("a");
      link.href = "path_to_your_cv.pdf"; // Path to your CV document
      link.download = "My_CV.pdf"; // The name of the downloaded file
      link.click(); // Programmatically click the link to trigger the download
      inputField.value = "Downloading CV..."; // Show message in the input field
      setTimeout(() => (inputField.value = ""), 1500); // Clear message after 1.5s
    }
  });
  
  

