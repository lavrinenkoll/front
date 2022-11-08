/*при нажатии на кнопку сделать видимым блок с id=div_troposfera*/
function showDiv(id_element) {
    /*изменить класс элемента*/
    document.getElementById(id_element).className = "div_"+id_element+"_visible";

    document.getElementById(id_element+"text1").style.display = "none";
    window.scrollTo(0, document.getElementById(id_element).offsetTop - 100);

    /*подождать перед выполнением следующей функции*/
    setTimeout(function() {
        window.scrollTo(0, document.getElementById(id_element).offsetTop );
    }
    , 1000);

}

function nextDiv(){
        /*если текущий блок невидимый, то сделать его видимым*/
    if (document.getElementById("troposfera").className == "div_troposfera") {
        showDiv("troposfera");
    }
    else if (document.getElementById("stratosfera").className == "div_stratosfera") {
        showDiv("stratosfera");
    }
    else if (document.getElementById("mesosfera").className == "div_mesosfera") {
        showDiv("mesosfera");
    }
    else if (document.getElementById("termosfera").className == "div_termosfera") {
        showDiv("termosfera");
    }
    else if (document.getElementById("exosfera").className == "div_exosfera") {
        showDiv("exosfera");
    }
    else {
        document.getElementById("finaltext1").style.display = "none";
        window.scrollTo(0, document.getElementById("exosfera").offsetTop - 100);
    }
}