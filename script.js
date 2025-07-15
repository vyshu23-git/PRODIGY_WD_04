const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const home = document.getElementById("home");
    const homeBottom = home.offsetTop + home.offsetHeight;
    
    if (window.scrollY > homeBottom - 80) {
      navbar.classList.add("solid-nav");
    } else {
      navbar.classList.remove("solid-nav");
    }
  });


