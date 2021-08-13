// একটি array এর নির্দিস্ট একটি ভ্যালুর পজিশান বের করার জন্য কোন ফাংশানটি লেখা হয়। 

// simple way 
var array=[11,22,33,44,55,66,77,88];
console.log(array.indexOf(33));



// using function
function indexcount(array){
    var index=array.indexOf("rabbi");
    return index;
}
var studentsName =["yousuf","rizvi","rehan","zihad","rabbi","fahad","raihan","monir"];
// [0,1,2,3,4,5,6,7]; array index start from 0 
var indexValue=indexcount(studentsName);
console.log("Rabbi Index in the array is :",indexValue);