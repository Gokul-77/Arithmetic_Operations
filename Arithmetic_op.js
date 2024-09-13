function add(){
    var num1 = document.getElementById("num1").value 
    var num2 = document.getElementById("num2").value 
    let ans = parseInt(num1) + parseInt(num2)
    document.getElementById("answer").innerHTML=ans
}

function sub(){
    var num1 = document.getElementById("num1").value 
    var num2 = document.getElementById("num2").value 
    let ans = parseInt(num1) - parseInt(num2)
    document.getElementById("answer").innerHTML=ans
}

function mul(){
    var num1 = document.getElementById("num1").value 
    var num2 = document.getElementById("num2").value 
    let ans = parseInt(num1) * parseInt(num2)
    document.getElementById("answer").innerHTML=ans
}

function div(){
    var num1 = document.getElementById("num1").value 
    var num2 = document.getElementById("num2").value 
    let ans = parseInt(num1) / parseInt(num2)
    document.getElementById("answer").innerHTML=ans
}
