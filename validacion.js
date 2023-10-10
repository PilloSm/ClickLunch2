const val= {};

console.log("Este es mi validacion")

function valNum (x){
    if (x.isNaN){
        console.log("Error");
    }
    else {
        return true;
    }

}
val.valNum=valNum();


module.exports=val();