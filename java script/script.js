// typed.js cdn Lagane ke bad ye code put krna hoga texed Animation

const typed = new Typed('.multiple-text', {
    strings: ['founder of Byte Harbor Tech', 'Web Designer', 'And Web Developer'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 1300,
    loop: true
});


// Sticky Header
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


}

// form Jquery Validation Cdn lagane ke Baad Yaha Code main ye kam krna hoga

jQuery("#frn").validate ({
    rules: {
        fname: "required",
        lname: "required",
        number: "required",
        msg: {
            required: true,
            minlength: 50,
        },
        email: {
            required: true,
            email: true,
        },
        
    },
    messages : {
        fname : "Please Fill Your First Name",
        lname : "Please Fill Your Last Name",
        number : "Please Fill Your number",
        msg: {
            required: "Please Enter Your Message",
            minlength: "Message Must Be At least 50 character along",
        },
        email: {
            required: "Please Enter Your Email address",
            minlength: "Please Enter A valid Email",
        },
    },
    submitHandler: function(form){
        form.submit();
    }
});

// Dark Light Mode code jquery wala hai

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick=() => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

}

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '70px',
    duration:1800,
    delay:150
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .about-content, .education-row, .skills-row, .portfolio-container, .container .contact form, ', {origin: 'bottom'});

ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});

