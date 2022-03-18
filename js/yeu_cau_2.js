const array =[];
function tao_mang(){
    array.splice(0,array.length)
    document.getElementById("array_arrange").innerHTML = array

    for(let i=0; i<Math.floor(Math.random() * 30)+5; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    document.getElementById("array1").innerHTML = array
}

function sap_tang(){
    if(array.length != 0){
        document.getElementById("array_arrange").innerHTML = array.sort((a, b) => a - b)
    }
    else{
        alert('Vui lòng tạo mảng')
    }
}

function sap_giam(){
    if(array.length != 0){
        array.sort((a, b) => a - b);
        document.getElementById("array_arrange").innerHTML = array.reverse();
    }
    else{
        alert('Vui lòng tạo mảng')
    }
}