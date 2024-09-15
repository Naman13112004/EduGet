
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


let tl = gsap.timeline()

tl.from('.nav', {
    y: -50,
    duration: 1,
    opacity: 0,
})


gsap.from('.info', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".info",
        scroller: "body",
        scrub:2
    },
}, "j")


function page2Animation() {
    
    let tl2 = gsap.timeline({
        scrollTrigger: {
        trigger: ".page02",
        scroller: "body",
        start: "top 60%",
        end: "top -60%",
        scrub: 2,
        },
    });
    
    tl2.from(
        ".left011",
        {
        x: -300,
        opacity: 0,
        duration: 1,
        },
        "anim"
    );
    tl2.from(
        ".right011",
        {
        x: 300,
        opacity: 0,
        duration: 1,
        },
        "anim"
    );
    
    tl2.from(
        ".left022",
        {
        x: -300,
        opacity: 0,
        duration: 1,
        },
        "jems"
    );
    tl2.from(
        ".right022",
        {
        x: 300,
        opacity: 0,
        duration: 1,
        },
        "jems"
    );
    }
page2Animation()

function pageAnimation() {
    
    let tl3 = gsap.timeline({
        scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        makers: true,
        start: "top 100%",
        end: "top -100%",
        },
    });
    
    tl3.from(
        "footer span",
        {
            y: 100,
            scale: 0.2,
            duration: 1,
            delay: 0.8,
            opacity: 0,
            stagger: 0.2
        },
    );
    }
pageAnimation()