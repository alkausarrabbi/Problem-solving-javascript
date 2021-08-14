var array=[11,21,23,45,56,78,98,101,121,1182];
for(var i=0; i<array.length; i++){
    var numbers=array[i];
    console.log(numbers);
    if(numbers>90){
        break;
    }
}


for(var i=0; i<array.length ;i++){
    var numbers=array[i];
    console.log(numbers);
    if (numbers>90){
        continue;
    }
}