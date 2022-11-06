/*при нажатии на кнопку сделать видимым блок с id=div_troposfera*/
function showDiv(id_element) {
    /*изменить класс элемента*/
    document.getElementById(id_element).className = "div_"+id_element+"_visible";
    /*переместить экран немного выше элемента*/
    window.scrollTo(0, document.getElementById(id_element).offsetTop + 200);

    document.getElementById(id_element+"button").style.opacity = 0;
    document.getElementById(id_element+"button").style.display = "none";
    document.getElementById(id_element+"text1").style.display = "none";
    document.getElementById(id_element+"text2").style.display = "none";
}