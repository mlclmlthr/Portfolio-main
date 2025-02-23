

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
        
        const cursor = document.createElement("span");
        cursor.classList.add("blinking-cursor");
        typingText.appendChild(cursor);
  
       
        showSection(".home__container");
        showSection(".project__container");
        showSection(".section2");
        showSection(".contact");
        showSection(".under-section2")
        showSection(".under-section2-2")
        showSection(".section3")
        showSection(".under-section2-3")
        showSection(".under-section3")
        showSection(".under-section3-1")
        showSection(".under-section3-2")
        
      }
    }
  
    function showSection(selector) {
      const section = document.querySelector(selector);
      if (section) {
        section.style.display = "grid"; 
        setTimeout(() => {
          section.classList.add("show"); 
        }, 50); 
      }
    }
  
    typeWriter();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const consoleNav = document.getElementById("console-nav");
    const inputField = document.getElementById("console-input");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 90) {
        consoleNav.style.top = "0"; 
      } else {
        consoleNav.style.top = "-90px"; 
      }
    });
  
    
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
    }, 5000); 
  
    inputField.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); 
  
        const command = inputField.value.trim().toLowerCase(); 
  
        if (command === "/about") {
          scrollToSection("about");
        } else if (command === "/projects") {
          scrollToSection("projects");
        } else if (command === "/contact") {
          scrollToSection("contact");
        } else if (command === "/download-cv") {
          downloadCV(); 
        } else {
          inputField.value = "Unknown command"; 
          setTimeout(() => (inputField.value = ""), 1500); 
        }
      }
    });
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        inputField.value = ""; 
      }
    }
  
    function downloadCV() {
      const link = document.createElement("a");
      link.href = "/assets"; 
      link.download = "Document1.pdf"; 
      link.click(); 
      inputField.value = "Downloading CV..."; 
      setTimeout(() => (inputField.value = ""), 1500); 
    }
  });
  
  

