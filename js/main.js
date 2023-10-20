// locomotive soomth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// mouse tracker circle js
function mouseCircleFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".mouse_circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
mouseCircleFollower();


// circle squezer
function circleSquezer() {
    window.addEventListener("mousemove", function (dets) {

    })
}
//first page animation

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from('.nav', {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut
        })

        .to('.boundingelm', {
            y: '0',
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1.5,
        })


        .from('.hero_footer', {
            y: '30',
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1.5,
            opacity: 0,

        })

}

firstPageAnim();



//experiance section img mousemove
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect.top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,

        })
    })


    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect.top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
        })
    })
})