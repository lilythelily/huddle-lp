"use strict";

const fb = document.querySelector(".fb");
const ig = document.querySelector(".ig");
const twitter = document.querySelector(".twitter");

fb.addEventListener("mouseenter", (e) => {
  fb.src = "images/Frame 4.svg" ? (fb.src = "images/fb.svg") : "";
});

fb.addEventListener("mouseleave", (e) => {
  fb.src = "images/Frame 4.svg";
});

ig.addEventListener("mouseenter", (e) => {
  ig.src = "images/Frame 2.svg" ? (ig.src = "images/ig.svg") : "";
});

ig.addEventListener("mouseleave", (e) => {
  ig.src = "images/Frame 2.svg";
});

twitter.addEventListener("mouseenter", (e) => {
  twitter.src = "images/Frame 3.svg"
    ? (twitter.src = "images/twitter.svg")
    : "";
});

twitter.addEventListener("mouseleave", (e) => {
  twitter.src = "images/Frame 3.svg";
});
