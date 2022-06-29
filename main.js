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

//Cache not in array -> stores in string, For each color own variable in cache
//format each var in cache to array
let dark = ["#62daff", "#1f1f1f", "#ffffff"]
let light = ["#2c16ac", "#dddddd", "#000000"]
let theme = localStorage["theme"]
let color = localStorage["color"]

set_color(color)

if (theme == "dark"){
    set_vars(dark)
}else{
    set_vars(light)
}
//list = ["theme", "--main-color", "--bg", "--text"]
function set_vars(list) {
    root.style.setProperty('--bg', list[1])
    root.style.setProperty('--text', list[2])
}

theme_btn.onclick = function() {
    theme = localStorage["theme"]

    if (theme == "dark") {
        localStorage["theme"] = "light"
        set_vars(light)
    }else{
        localStorage["theme"] = "dark"
        set_vars(dark)
    }
    theme_btn.innerText = localStorage["theme"]
}

function set_color(color) {
    root.style.setProperty('--main-color', color)
    localStorage["color"] = color
}

red.onclick = function() {
    set_color("#f44545")
}

orange.onclick = function() {
    set_color("#f48b45")
}
yellow.onclick = function() {
    set_color("#ffff45")
}
green.onclick = function() {
    set_color("#76ff6f")
}
blue.onclick = function() {
    set_color("#6f89ff")
}
purple.onclick = function() {
    set_color("#a63aff")
}

black.onclick = function() {
    set_color("#000000")
}

white.onclick = function() {
    set_color("#ffffff")
}