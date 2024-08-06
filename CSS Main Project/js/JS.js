// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 60) {
//     $("header").addClass("scrolledHeader");
//     $(".mask").addClass("scrolledMask");
//   } else {
//     $("header").removeClass("scrolledHeader");
//     $(".mask").removeClass("scrolledMask");
//   }
// });

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
