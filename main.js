const toggleMenu = () => document.body.classList.toggle("open");


const banner = document.getElementById('banner');
const h1 = banner.querySelector('h1');
const button = banner.querySelector('button'); 

const onScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollPosition > 150) {
    banner.style.backgroundSize = "130%";
    h1.style.opacity = 0;
    h1.style.transform = "translateY(-50px) scale(0.9)";
   
    if (button) { 
      button.style.opacity = 0;
      button.style.transform = "translateY(-50px) scale(0.8)";
    }
    
  } else {
    banner.style.backgroundSize = "100%";
    h1.style.opacity = 1;
    h1.style.transform = "translateY(0) scale(1)";
    
    if (button) {
      button.style.opacity = 1;
      button.style.transform = "translateY(0) scale(1)";
    }
  }
};

document.addEventListener("scroll", onScroll);



    


