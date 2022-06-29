let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let id;
function encrypt(mes, pass) {
    var encrypted = mes.toLowerCase().split("")
    var pass = parseInt(pass)
    var final = []

    for (let value of encrypted){
        index = letters.indexOf(value)
        id = index
        if (id+pass > 25){
            id = index-26
        }

        final.push(value.replace(letters[index], letters[id+pass]))
    }
    return `*${final.join("")}`
}

function decrypt(enc, pass) {
    var decrypted = enc.toLowerCase().replace("*", "").split("")
    var pass = parseInt(pass)
    var final = []

    for (let value of decrypted){
        index = letters.indexOf(value)
        id = index


        if (id-pass < 0){
            id = id+26
        }

        console.log(index, id-pass)

        final.push(value.replace(letters[index], letters[id-pass]))
    }
    return `${final.join("")}`
}

function error(message){
    document.getElementById("error").innerText = message
    setTimeout(function(){
        document.getElementById("error").innerText = ""
    }, 3000);
}

document.getElementById("convert").onclick = function(){
    var input = document.getElementById("input").value
    var password = document.getElementById("password").value

    if (password == "" || parseInt(password) > 26 || parseInt(password) < 0){
        error("Enter valid number!")
        return
    }
        
    if (input[0] == "*"){
        document.getElementById("output").innerText = decrypt(input, password)
    } else {
        document.getElementById("output").innerText = encrypt(input, password)
    }
}

document.getElementById("reset").onclick = function(){
    document.getElementById("input").value = ""
    document.getElementById("password").value = ""
    document.getElementById("output").innerText = ""
    document.getElementById("error").innerText = ""
}

const input = document.querySelector("input")

function copy(text){
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem)
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

document.getElementById("copy").onclick = function(){
    copy(document.getElementById("output").textContent)
}