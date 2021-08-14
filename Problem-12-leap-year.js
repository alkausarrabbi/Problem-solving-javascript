function leapyear(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return "This year is a leap year";
    }
    else {
        return "This year is not leap year";
    }
}
var checkYear=leapyear(2012);
console.log(checkYear);