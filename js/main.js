//const config = require('../img.json');
var json = [
    {"picture": "../img/imagen.jpg"},
    {"picture": "../img/imagen.jpg"},
    {"picture": "../img/imagen.jpg"},
    {"picture": "../img/imagen.jpg"},
    {"picture": "../img/imagen.jpg"}
];
const div=document.createElement('div');
const xhttp = new XMLHttpRequest();
xhttp.open('GET','../img.json',true);
xhttp.send();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        let datos= JSON.parse(this.responseText);
        for(i=1;i<3;i++){
            console.log(datos[i]);
            const image=document.createElement('img');
            image.src=datos[i].pictures;
            image.style.width='500px';
            
            document.getElementById("principal").appendChild(div).appendChild(image);
            localStorage.setItem('num_images', 2);
        }
    }
} 

let barra= document.getElementById("header_bar");
let selec= document.getElementById("principal");
let side= document.getElementById("icono");
let contador=0;
let value=1;



function myFunction() {
    var j=localStorage.getItem('num_images');
    localStorage.setItem('num_images', parseFloat(j)+parseFloat(3));
    const div=document.createElement('div');
    xhttp.open('GET','../img.json',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let datos= JSON.parse(this.responseText);
            for(i=(parseFloat(j)+parseFloat(1));i<(parseFloat(j)+parseFloat(3));i++){
                    console.log(datos[i]);
                    const image=document.createElement('img');
                    image.src=datos[i].pictures;
                    document.getElementById("principal").appendChild(div).appendChild(image);
            }
        }
    }
}

side.addEventListener("click",function(){

    if(contador==0){
        barra.className = ('dos');
        contador=1;
    }
    else{
        barra.className.remove = ('dos');
        barra.className = ('uno');
        contador=0;
    }
});
function seleccion(value) {
    if(value==1){
        selec.className.remove = ('images barrita');
        selec.className = ('images cuadrito');
    }
    else if(value==2){
        console.log('barrita');
        selec.className.remove = ('images cuadrito');
        selec.className = ('images barrita');
    }
}
 