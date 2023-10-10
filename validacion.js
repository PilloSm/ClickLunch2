const vals= {};

console.log("Este es mi validacion");
var pattern ="";
function valNum (x){
    if (isNaN(x)){
        console.log("Error");
        return false;
    }
    else {
        return true;
    }
}

function valPass(x){
    if(x.length>8 && x.length<30){
        return true;
    }
    else{
        console.log("Error de longitud");
        return false;
    }
}

function valCorreo(x){
    console.log("En proceso de");
}

function valString(x){
    console.log("En proceso");

}

vals.valNum=valNum();
vals.valPass=valPass();
module.exports=val();