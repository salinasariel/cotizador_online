function calculatePrice(){
    var cantjs=document.getElementById("cant").value;
    var cuotasjs=document.getElementById("cuotas").value;
    var select= document.getElementById("select")
    var preciofinal=0
    var result = document.getElementById('result');

    if("general" == select.value){
        
        result.style.backgroundColor = '#FFBD00';
        result.style.display = 'flex'
        result.innerHTML = 'Por favor, introduzca un color.'
    }else if(""==cantjs){
        
        result.style.backgroundColor = '#FFBD00';
        result.style.display = 'flex'
        result.innerHTML = 'Por favor, seleccione una cantidad valida (Entre 1 y 10).'
    }else if("none"==cuotasjs){
        result.style.backgroundColor = '#FFBD00';
        result.style.display = 'flex'
        result.innerHTML = 'Por favor, introduzca su financiación.'
    }else{
        if (cuotasjs==1){
            preciofinal=38000*cantjs
            result.style.backgroundColor = '#ABABAB';
            result.style.display = 'flex'
            result.innerHTML = "El importe cotizado es: $"+preciofinal
        }else if (cuotasjs==6){
            preciofinal=(38000*cantjs)*1.15
            result.style.backgroundColor = '#ABABAB';
            result.style.display = 'flex'
            result.innerHTML = "El importe cotizado es: $"+preciofinal
        }else if (cuotasjs==12){
            preciofinal=(38000*cantjs)*1.30
            result.style.backgroundColor = '#ABABAB';
            result.style.display = 'flex'
            result.innerHTML = "El importe cotizado es: $"+preciofinal
        }
    }

    
}

function changeProductImage(){

    var select= document.getElementById("select")
    if("Black" == select.value){
        document.getElementById("contenedorimg").innerHTML = '<img src="./img/JBL_FLIP6_HERO_BLACK.png" >';
    }
    if("grey" == select.value){
        document.getElementById("contenedorimg").innerHTML = '<img src="./img/JBL_FLIP6_HERO_GREY.png" >';
    }
    if("blue" == select.value){
        document.getElementById("contenedorimg").innerHTML = '<img src="./img/JBL_FLIP6_HERO_BLUE_.png" >';
    }
    if("red" == select.value){
        document.getElementById("contenedorimg").innerHTML = '<img src="./img/JBL_FLIP6_HERO_RED.png" >';
    }
    if("general" == select.value){
        document.getElementById("contenedorimg").innerHTML = '<img src="./img/JBLs.png" >';
    }

}