// Escribe tu código aquí.

var palabra = 'javavv';
var palabras = ['insecto','bootcamp','papa','uva','sal','cebolla','mangos','reptil','mosca','escritorio'];
var cadenas;
var cadenasFiltradas=[];

function revisarString(String1,String2){
    
    //console.log(typeof(palabras));
    var palabra1 = String1;

    console.log("el tamaño es",palabra1.length);
    cadenas = String2;

    //cadenasFiltradas=[];

    for(let i=0;i<cadenas.length;i++){
        if(palabra1.length<cadenas[i].length){
            cadenasFiltradas[i]=cadenas[i];
            //console.log(palabra1.length<cadenas[i].length);
            //console.log("palabra",palabra1.length);
            //console.log("cadenas",cadenas[1].length);
        }//cierra if
    }//cierra for
    return cadenasFiltradas;
}

function ejecutar(){
revisarString(palabra,palabras);
}

var html = ` <h1>Lista de palabras</h1>
<ul>
    {palabras.[i]}
</ul>`

