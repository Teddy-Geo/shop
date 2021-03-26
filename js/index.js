//NAVIGATION

const fullNavigation = document.querySelector(".nav");
const mainNavigation = fullNavigation.querySelector(".nav-main");
const mobileMenuBtn = document.querySelector(".mobile-btn");
const closeNavigation = fullNavigation.querySelector(".close");
const goBackNavigation = fullNavigation.querySelector(".back");
let subNavigation;

mainNavigation.addEventListener("click", (e) =>{
    if(e.target.closest(".nav-children")){
        const navChildren = e.target.closest(".nav-children");
        //console.log(navChildren);
        openSubNavigation(navChildren);
    }
});
goBackNavigation.addEventListener("click",() =>{
    hideSubNavigation();
});
closeNavigation.addEventListener("click",() =>{
    toggleNavigation();
});
mobileMenuBtn.addEventListener("click",() =>{
    toggleNavigation();
});

document.querySelector(".nav-overlay").addEventListener("click",() =>{
    toggleNavigation();
});

function openSubNavigation(navChildren) {
    subNavigation = navChildren.querySelector(".sub-nav");
    subNavigation.classList.add("active");
    subNavigation.style.keyframe = "slideLeft 0.5 ease forwards";
    const navMainCategory = navChildren.querySelector("i").parentNode.childNodes[0].textContent;
    //console.log(navMainCategory);
    fullNavigation.querySelector(".current-tab").innerHTML = navMainCategory;
    fullNavigation.querySelector(".mobile-nav-elements").classList.add("active");
}

function hideSubNavigation(){
    subNavigation.style.keyframe = "slideRight 0.5 ease forwards";
    setTimeout(() =>{
        subNavigation.classList.remove("active"); 
    },100);
    fullNavigation.querySelector(".current-tab").innerHTML = "";
    fullNavigation.querySelector(".mobile-nav-elements").classList.remove("active");
}

function toggleNavigation() {
    fullNavigation.classList.toggle("active");
    document.querySelector(".nav-overlay").classList.toggle("active");
}

window.onresize = function() {
    if(this.innerWidth > 937){
        if(fullNavigation.classList.contains("active")){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
}



//SEARCH BTN AND FORM

const search = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if(searchBtn){
    searchBtn.addEventListener("click", function (){
    search.classList.toggle("active");
    searchBtn.classList.toggle("active");
    searchInput.focus();
});
}



//SCROLL TO TOP BUTTON

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function (){
// window.scrollTo(0, 0);
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});


// Login form show pass func
function showPass() {
    const x = document.getElementById("lpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    const y = document.getElementById("spass");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }


// TESTIMONIALS REVIEWS
const reviewsContainer = document.querySelector(".review-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
    {
        name: 'Sara Jones',
        position:'Marketing',
        photo:'https://randomuser.me/api/portraits/women/46.jpg',
        text:"Dolor consul eam te, mucius prompta eos eu, aperiam perpetua mel id. Per id facilis expetenda consectetuer, ei quo habemus luptatum, sint accusam at pri. Duo tation patrioque cu, minim.",
    },
    {
        name: 'Jack Smith',
        position:'Sales',
        photo:'https://randomuser.me/api/portraits/men/40.jpg',
        text:"Per id facilis expetenda consectetuer, ei quo habemus luptatum, sint accusam at pri. Duo tation patrioque cu, minim. Dolor consul eam te, mucius prompta eos eu, aperiam perpetua mel id. Te dico summo noluisse est.",
    },
    {
        name: 'Sam Baker',
        position:'Customer',
        photo:'https://randomuser.me/api/portraits/men/25.jpg',
        text:" Duo tation patrioque cu, minim eleifend definiebas quo in, eos menandri reprehendunt ad. Te dico summo noluisse est.Per id facilis expetenda consectetuer.",
    },

]

let index = 1;
function updateTestimonial(){
   const {name, position, photo, text} = testimonials[index];

   testimonial.innerHTML = text;
   userImage.src = photo;
   username.innerHTML = name;
   role.innerHTML  = position;

   index++;

    if(index > testimonials.length - 1){
        index = 0;
    }
}
setInterval(updateTestimonial, 8000);

