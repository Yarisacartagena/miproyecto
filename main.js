const dsemana=["lunes","martes","miercoles","jueves"];
dsemana[4]="sabado";
dsemana[5]="domingo";
console.log(dsemana);

dsemana.push("sabado");
dsemana.push("domingo");

dsemana.unshift("virnes");

dsemana.pop("domingo");
dsemana.pop("viernes");

let i=0;
while(i<10){
    console.log(i);
    i++
}

let Dinero=500;
let Totalpagar=300;
let Tarjeta=true;
let Cheque=true;

if(Dinero>Totalpagar && Tarjeta ){
    console.log("Puedes pagar");
}else{
    console.log("No tiene plata");
}
function numerosAleatorios(cantidad){
    let array=[];
    for(let i=0;i < cantidad;i++){
    let numeros=Math.floor(Math.rendom()*100);
    array.push(numeros);
    console.log(´'este es el array con numeros repetidos ${array}');
    }
}

function Noequals(array){
    let newArray _[];
    array.forEach(i=>{
        if(!newArray.includes(i))
    }

    )

}







