gsap.to(".airport", {left: 0, duration: 8, ease: "power2.in", delay: -1.1})
gsap.to(".airport", {top: 100, delay: 5, duration: 2})
gsap.to(".cloud", {left: 268, top: 173, duration: 6, delay: 5.5})
gsap.to(".cloud", {opacity: 0, delay: 9})


var tl = gsap.timeline();

tl.to(".stay-on-top", {top: -5  , opacity: 1, duration: 0.2, delay: 1})
tl.to(".airplane, .wheel", {left: 0, duration: 1.5, ease: "power1.out", delay: 1})
tl.to(".airplane, .wheel, .airplane2", {top: -25, rotation: 10, duration: 1.5, ease: "power1.out", delay: 1, scale: 0.5})
tl.to(".wheel", {top: -42, opacity: 0, delay: -1.5, duration: 1.5})
tl.to(".airplane, .wheel", {opacity: 0})
tl.to(".airplane2", {opacity: 1, delay: -1.8, duration: 1})
tl.to(".wifi", {top: -8, delay: -1.9, duration: 1, ease: "none"})
tl.to(".wifi-1", {opacity: 0, delay: -1.5})
tl.to(".wifi-2", {opacity: 0, delay: -1.2})
tl.to(".wifi-3", {opacity: 0, delay: -0.9})
tl.to(".wifi-4", {opacity: 0, delay: -0.6})
tl.to(".stay-on-top", {opacity: 0, delay: -1})
tl.to(".without-wifi", {top: 0, opacity: 1, delay: -0.9})
tl.to(".outlook, .without-wifi, .wifi, .airplane2", {top: 251, delay: 2})
tl.to(".last-frame", {top: 0, delay: -0.3})
tl.fromTo(".sticker", {scale: 1}, {scale: 1.2, duration: 0.3 });
tl.to(".sticker", {scale: 1, duration: 0.3});
tl.fromTo(".shine", {left: 0}, {left: 150})



var tl2 = gsap.timeline();

function mouseInfo(){
    tl2.to(".arrow", {left: 14, duration: 0.2})
    tl2.fromTo(".arrow", {left: -14}, {left: 0, duration: 0.2})
}