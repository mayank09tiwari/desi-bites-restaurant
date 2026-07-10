
// =========================
// MOBILE MENU
// =========================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});




// Close menu after clicking link


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});







// =========================
// RESERVATION FORM
// =========================



const form = document.querySelector(".reservation-form");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert("Thank you for booking with DesiBites! We will contact you soon.");


    form.reset();


});








// =========================
// SCROLL ANIMATION
// =========================



const cards = document.querySelectorAll(
".food-card, .gallery-item, .testimonial-card"
);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });


},{
    threshold:0.2
});





cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s";


    observer.observe(card);


});







// =========================
// CURRENT YEAR FOOTER
// =========================


const year = new Date().getFullYear();


const copyright = document.querySelector(".copyright p");


if(copyright){

    copyright.innerHTML =
    `© ${year} DesiBites Restaurant. All Rights Reserved.`;

}