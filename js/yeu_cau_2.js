const array =[];
function create_array(){
    array.splice(0,array.length)
    for(let i=0; i<Math.floor(Math.random() * 30)+1; i++) {
        array.push(Math.floor(Math.random()*100)+1);
    }
    document.getElementById("array1").innerHTML = array
}
