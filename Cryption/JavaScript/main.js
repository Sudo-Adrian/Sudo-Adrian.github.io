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

var main_col = document.getElementById("col-main");
var text_col = document.getElementById("col-text");
var bgc_col = document.getElementById("col-bg");
var set = document.getElementById("set-theme")

let dark = [localStorage["main"], "#0a0a0a", "#ffffff"]
let light = [localStorage["main"], "#dddddd", "#000000"]

let theme_local = localStorage["theme"]
let background_local = localStorage["background"]
let main_local = localStorage["main"]
let text_local = localStorage["text"]


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
    }else if (localStorage["theme"] == "light"){
        localStorage["theme"] = "dark"
        set_vars(dark[1], dark[0], dark[2])
    }else{

    }
}

red.onclick = function() {
    set_vars(background_local, "#f44545", text_local)
}

orange.onclick = function() {
    set_vars(background_local, "#f48b45", text_local)
}
yellow.onclick = function() {
    set_vars(background_local, "#ffff45", text_local)
}
green.onclick = function() {
    set_vars(background_local, "#76ff6f", text_local)
}
blue.onclick = function() {
    set_vars(background_local, "#6f89ff", text_local)
}
purple.onclick = function() {
    set_vars(background_local, "#a63aff", text_local)
}

black.onclick = function() {
    set_vars(background_local, "#000000", text_local)
}

white.onclick = function() {
    set_vars(background_local, "#ffffff", text_local)
}