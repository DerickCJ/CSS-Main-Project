// grab header and footer - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

mainHeader.innerHTML = `
    <div class="logo">
      <a href="index.html">
      <img src="./image/logo.png" alt="logo" class="iconLogo">
      </a>
      <p>Eco-Ride</p>      
    </div>
    <nav>   
      <div class="button">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </div>
      <ul class="menu" id="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="product.html">Product</a></li>
        <li><a href="about us.html">About us</a></li>
        <li><a href="contact us.html">Contact Us</a></li>
      </ul>
      
    </nav>
    
    <div class="login" id="login">
      <a href="contact us.html">Login</a>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="contact us.html">Register</a>
    </div>
`;

mainFooter.innerHTML = `

  <div class="footer-left">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><a href="#">444 Cedros Ave, California</a></p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p><a href="#">+1(123) DIAL-NOW</a></p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#">info@rotarydialphones.com</a></p>
        </div>
  </div> 
  

  <div class="footer-center"> 
         
        <p class="footer-company-name">&copy; 2024 Rotary Dial. All rights reserved.<br>
           Privacy Policy
        </p>
    
  </div>  


  <div class="footer-right">

    <div class="footer-icons">
      <img src="./image/logo.png" alt="logo" class="iconLogo">
      <a href="#" id="fa-facebook" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-linkedin"></a>
      <a href="#" class="fa fa-github"></a>
    </div>
      <p class="footer-links">
          <a href="#">Blog</a>&nbsp;|&nbsp;
          <a href="#">Faq</a>&nbsp;|&nbsp;
          <a href="#">Contact</a>
      </p>
  </div>  
`;

// Header color change function
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  } else {
    mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});



// Slide up
function SlideUp() {
  var reveals = document.querySelectorAll(".slide-up");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", SlideUp);



// Images slideshow function
let count = 0;
const image = document.querySelector('.slide-container');

function nextImage() {
  count++;
  if (count >= 2) {
    count = 0;
  }
  image.style.transform = `translateX(${- count * 80}vw)`;
}

setInterval(nextImage, 3000);




// animation for navigation bar in the product page
window.addEventListener('scroll', function () {
  const subNav = document.getElementById('subNav');
  const offset = subNav.offsetTop;

  if (window.pageYOffset > offset) {
    subNav.classList.add('fixed');
  } else {
    subNav.classList.remove('fixed');
  }
});

document.querySelectorAll('.sub-nav a').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector('.sub-nav .active').classList.remove('active');
    event.target.classList.add('active');
  });
});

// Intersection Observer API
const sections = document.querySelectorAll('#ss, #b, #cm, #na');
const navLinks = document.querySelectorAll('.sub-nav a');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`.sub-nav a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});


