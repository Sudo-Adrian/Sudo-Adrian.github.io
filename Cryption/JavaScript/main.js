var theme_btn = document.getElementById("btn-theme");
var root = document.querySelector(':root');
var red =  document.getElementById("red");
var orange = document.getElementById("org");
var yellow = document.getElementById("yel");
var green = document.getElementById("gre");
var blue = document.getElementById("blu");
var purple = document.getElementById("pur");
var black = document.getElementById("bla");
var white = document.getElementById("whi");


var set = document.getElementById("set-theme")

let dark = [localStorage["main"], "#0a0a0a", "#ffffff"]
let light = [localStorage["main"], "#dddddd", "#000000"]


set_vars(localStorage["background"], localStorage["main"], localStorage["text"])

//list = ["--main-color", "--bg", "--text"]
function set_vars(back, main, text) {
    root.style.setProperty('--bg', back)
    root.style.setProperty('--text', text)
    root.style.setProperty('--main-color', main)

    localStorage["main"] = main
    localStorage["text"] = text
    localStorage["background"] = back
}

theme_btn.onclick = function() {
    if (localStorage["theme"] == "dark"){
        localStorage["theme"] = "light"
        set_vars(light[1], light[0], light[2])
        theme_btn.innerText = "light"
    }else if (localStorage["theme"] == "light"){
        localStorage["theme"] = "dark"
        theme_btn.innerText = "dark"
        set_vars(dark[1], dark[0], dark[2])
    }else{

    }
}

set.onclick = function() {
    set_vars(document.getElementById("col-bg").value, document.getElementById("col-main").value, document.getElementById("col-text").value)
}

red.onclick = function() {
    set_vars(localStorage["background"], "#f44545", localStorage["text"])
}

orange.onclick = function() {
    set_vars(localStorage["background"], "#f48b45", localStorage["text"])
}
yellow.onclick = function() {
    set_vars(localStorage["background"], "#ffff45", localStorage["text"])
}
green.onclick = function() {
    set_vars(localStorage["background"], "#76ff6f", localStorage["text"])
}
blue.onclick = function() {
    set_vars(localStorage["background"], "#6f89ff", localStorage["text"])
}
purple.onclick = function() {
    set_vars(localStorage["background"], "#a63aff", localStorage["text"])
}

black.onclick = function() {
    set_vars(localStorage["background"], "#000000", localStorage["text"])
}

white.onclick = function() {
    set_vars(localStorage["background"], "#ffffff", localStorage["text"])
}