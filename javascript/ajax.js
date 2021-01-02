//! Consumir API con AJAX

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

function respuesta() {
    //console.log(this.responseText);
    let json = JSON.parse(xhr.responseText);
    console.log(json);
}
xhr.addEventListener("load", respuesta);




//! Ejemplo de addEventListener()

function res() {
    document.getElementById("demo").innerHTML = "Hola a Todos Morefokers hoy es navidarks!";
}
document.addEventListener("click", res);