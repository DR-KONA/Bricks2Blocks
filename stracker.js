import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedLogoBox = document.querySelector(".logoBox");

const animatedLogoBox2 = document.querySelector(".logoBox");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

const animatedLogoBoxTimeline = new ScrollTimeline({
    scrollOffsets: [CSS.percent(5), CSS.percent(15)],
});

const animatedLogoBoxTimeline2 = new ScrollTimeline({
    scrollOffsets: [CSS.percent(15), CSS.percent(100)],
});

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);
//
// animatedLogoBox.animate(
//     {
//         transform: [, "translateY(-72.5%)"]
//     },
//     {
//         duration: 1,
//         timeline: animatedLogoBoxTimeline,
//
//     },
//
// )

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollpos =window.scrollY;
    console.log(currentScrollpos);
    if( currentScrollpos< 10 ) {
        document.getElementById("logoBox").style.top = "0";
    } else {
        document.getElementById("logoBox").style.top = "min(-17vh,-17vw)";
    }

    prevScrollpos = currentScrollpos;
}


///////////


