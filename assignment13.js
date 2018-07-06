
var marks =[80,77,90,68,95];
var avgmarks=0;
for (i=0;i<marks.length;i++){
    avgmarks+=marks[i];
    var avg = avgmarks/marks.length;
}
console.log("Avrage marks:"+ avg);
 if(avg<60){
     console.log("grade: F");
 }else if(avg<70){
     console.log("grade: D")}
     else if (avg<80){
         console.log("grade : C");}
         else if (avg<90){
             console.log("grade : B");
         }else if (avg<100){
             console.log("grade : A");
         }
    


