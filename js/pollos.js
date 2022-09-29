var factura = new Object();

factura.super = 7.25;
factura.personal = 5.75;
factura.infantil = 3.50;
factura.comments = "";

factura.compCant = 0;

factura.combos = 1;
factura.total = 0;
factura.comentarios 



 function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
        str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0, pt) + "." + str.slice(pt);
}


function getRadioVal(form, name) {
    var radios = form.elements[name]; //Recibe el valor de todos los radios con el atributo name
    var val;
    for (var i = 0, len = radios.length; i < len; i++) { //Se verifica cada radio
        if (radios[i].checked == true) { //Verificar que radio está marcado con true.
            val = radios[i].value; //Se obtiene el valor asignado en radio
            radios[i].nextElementSibling.removeAttribute("disabled")
            break;
        }
    }
    return val;
}

function complementosTotal(e) { //Función para obtener el total de los complementos
    var form = this.form;
    var cant = 0;
    var cambios = document.getElementById("cantidadesComp");
    var factText = "";
    var comboname;
    var val = parseFloat(form.elements['compsTotal'].value);
    if ( this.checked == true ) { //Si el elemento está marcado entonces

    this.nextElementSibling.removeAttribute("disabled"); //Remover el atributo deshabilitado del siguiente input
    this.nextElementSibling.value = 1; //Establecer el valor de 1 del input
    var selectElement = this.nextElementSibling
    factura.compCant = this.nextElementSibling.value;
    factText += String(factura.compCant) + " "+this.id +" "+ this.value+"<br>"; //Agregar a la factura
    document.getElementById("facture").innerHTML += factText;

    
  val += parseFloat(this.value)*factura.compCant;

    } else {
    factText -= String(cant) - this.id; 
    document.getElementById("facture").innerHTML -= factText;
    val -= parseFloat(this.value);
    this.nextElementSibling.setAttribute("disabled", "")
    this.nextElementSibling.value = 0;
    }
    form.elements['compsTotal'].value = formatDecimal(val);
    polloTotal(form);
    }

    function precioComboTotal(e) {
    this.form.elements['comboTotal'].value = parseFloat(this.value);
    polloTotal(this.form);
    }
    function polloTotal(form) {
    var combTotal = parseFloat(form.elements['comboTotal'].value);
    var comps_tot = parseFloat(form.elements['compsTotal'].value);
    form.elements['total'].value = formatDecimal(combTotal + comps_tot);
    }
    (function() {
    var form = document.getElementById('polloForm');
    var el = document.getElementById('compPollos');
 


    var comps = el.getElementsByTagName('input');
    for (var i=0, len=comps.length; i<len; i++) {
    if (comps[i].type === 'checkbox') {
    comps[i].onclick = complementosTotal;
    }
    }
    var sz = form.elements['combo'];
    for (var i=0, len=sz.length; i<len; i++) {
    sz[i].onclick = precioComboTotal;
    }

    form.elements['comboTotal'].value = formatDecimal(parseFloat(getRadioVal(form, 'combo')));
    polloTotal(form);
    })();
