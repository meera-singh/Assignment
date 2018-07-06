
var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= array[0];
function larnum (){

for (i=0; i<=array.length;i++){
    if (array[i]>largest) {
        largest=array[i];
    }
    }
    console.log(largest);
}
larnum();
