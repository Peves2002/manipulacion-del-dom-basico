var n1_js = document.getElementById('n1');
var n2_js = document.getElementById('n2');
var sumar_js = document.getElementById('sumar');
var form = document.getElementById('form');

//Ejecuta cada cierto evento ('nombre de evento',función código)
form.addEventListener('submit',btnSumar);
//sumar_js.addEventListener('click',btnSumar)

function btnSumar(event){
    console.log(event);
    event.preventDefault();
    console.log('Click en botón');
    var suma = Number(n1_js.value)+Number(n2_js.value);
    alert(suma);
}

function dobleClick(){
    alert("Alertaaa")
}