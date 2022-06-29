function encrypt(mes, pass) {
    var encrypted = CryptoJS.AES.encrypt(mes, pass);
    return `*${encrypted}`;
}

function decrypt(enc, pass) {
    var decrypted = CryptoJS.AES.decrypt(
      enc, pass).toString(CryptoJS.enc.Utf8);
    return `${decrypted}`
}

document.getElementById("convert").onclick = function(){
    var input = document.getElementById("input").value
    var password = document.getElementById("password").value

    if (password == ""){
        
        document.getElementById("error").innerText = "Enter password!"
        setTimeout(function(){
            document.getElementById("error").innerText = ""
        }, 3000);  
        return
    }

    if (input[0] != "*"){
        document.getElementById("output").innerText = encrypt(input, password)
    }else{
        input = input.replace("*", "")
        var decry = decrypt(input, password)
        if (decry == ""){
            document.getElementById("error").innerText = "Wrong password!"

            setTimeout(function(){
                document.getElementById("error").innerText = ""
            }, 3000);
            
        }
        document.getElementById("output").innerText = decry
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