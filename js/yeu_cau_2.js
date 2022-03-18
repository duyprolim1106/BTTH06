const array =[];
function tao_mang(){
    array.splice(0,array.length)
    document.getElementById("array_arrange").innerHTML = array;

    for(let i=0; i<Math.floor(Math.random() * 30)+5; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    document.getElementById("array1").innerHTML = array
}

function sap_tang(){
    document.getElementById("array_arrange").innerHTML = array.sort();
}

function sap_giam(){
    array.sort();
    document.getElementById("array_arrange").innerHTML = array.reverse();
}