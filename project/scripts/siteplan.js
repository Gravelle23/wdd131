document.addEventListener("DOMContentLoaded", function () {

    const yearSpan = document.getElementById("currentyear");
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "⬆ Top";
    scrollBtn.setAttribute("id", "scrollToTopBtn");
    scrollBtn.setAttribute("aria-label", "Scroll to top");
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "10px";
    scrollBtn.style.backgroundColor = "#E74C3C";
    scrollBtn.style.color = "white";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "5px";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "1000";
  
    document.body.appendChild(scrollBtn);
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");

  hamburgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
  