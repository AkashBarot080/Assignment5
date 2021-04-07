var CADValue = 1.26;

function CAD_func(){
    document.getElementById("USD").value = "";
}

function Converter(){
    var CADAmount = parseInt(document.getElementById("CAD").value).toFixed(2);
    if (isNaN(parseInt(CADAmount))){
             alert("Invalid,Please enter CAD Currency (only in numbers)");
             return false;
             }
       else {
        document.getElementById("invalidMsg").innerText = "";
        var USDAmount = parseFloat(CADAmount/CADValue).toFixed(2);
        document.getElementById("USD").value = USDAmount;
    }
}

function Season(){
    var Season = prompt("Please Enter the Season!!!!");
    if (Season.toLocaleLowerCase() == "winter"){
        alert("Winter Season");
    } else if (Season.toLocaleLowerCase() == "spring") {
        alert("Spring Season");
    }else if (Season.toLocaleLowerCase() == "summer") {
        alert("Summer Season");
    } else if (Season.toLocaleLowerCase() == "fall") {
        alert("Fall Season");
    } else {
        alert("Invalid season !!! Please enter again");
    }
}