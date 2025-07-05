$(document).ready(function () {

    /* ==================== NAVBAR TOGGLE ==================== */
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    /* ==================== SCROLL & LOAD EVENTS ==================== */
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // show / hide scroll‑top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll‑spy
        $('section').each(function () {
            const height = $(this).height();
            const offset = $(this).offset().top - 200;
            const top = $(window).scrollTop();
            const id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    /* ==================== SMOOTH SCROLLING ==================== */
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    /* ==================== CONTACT FORM (EMAIL.JS) ==================== */
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
});

/* ==================== VISIBILITY TAB TITLE ==================== */
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Ayesha Naaz";
        $("#favicon").attr("href", "assets/images/favicon_2.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

/* ==================== TYPED.JS EFFECT ==================== */
new Typed(".typing-text", {
    strings: ["Financial Planning", "Accounting", "TAX Planning", "Financial Advisory"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

/* ==================== FETCH DATA (SKILLS & PROJECTS) ==================== */
async function fetchData(type = "skills") {
    const file = type === "skills" ? "skills.json" : "./projects/projects.json";
    const response = await fetch(file);
    return await response.json();
}

/* ========== RENDER SKILLS ========== */
function showSkills(skills) {
    const skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

/* ========== RENDER PROJECTS (BACKGROUND IMAGE VIA project.bg) ========== */
function showProjects(projects) {
    const projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";

    projects
        .slice(0, 10)
        .filter(project => project.category !== "android")
        .forEach(project => {
            projectHTML += `
            <div class="box tilt project" style="--bg:url('${project.bg}')">
                <div class="content">
                    <div class="tag"><h3>${project.name}</h3></div>
                    <div class="desc"><p>${project.desc}</p></div>
                </div>
            </div>`;
        });

    projectsContainer.innerHTML = projectHTML;

    /* Tilt.js */
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    /* Scroll‑reveal for project cards */
    const srtop = ScrollReveal({ origin: 'top', distance: '80px', duration: 1000, reset: true });
    srtop.reveal('.work .box', { interval: 200 });
}

/* ========== INITIAL LOAD ========== */
fetchData().then(showSkills);
fetchData("projects").then(showProjects);

/* ==================== GLOBAL TILT INIT ==================== */
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

/* ==================== DISABLE DEV TOOLS ==================== */
document.onkeydown = function (e) {
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    ) {
        return false;
    }
};

/* ==================== TAWK.TO LIVE CHAT ==================== */
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

/* ==================== SCROLL‑REVEAL GLOBAL ELEMENTS ==================== */
const srtop = ScrollReveal({ origin: 'top', distance: '80px', duration: 1000, reset: true });

// HOME SECTION
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

// ABOUT SECTION
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

// SKILLS SECTION
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

// EDUCATION SECTION
srtop.reveal('.education .box', { interval: 200 });

// PROJECTS SECTION
srtop.reveal('.work .box', { interval: 200 });

// EXPERIENCE SECTION
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

// CONTACT SECTION
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
