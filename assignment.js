



//  1)kilometer to meter converter.

function kilometerToMeter(kilometer){
    var meter=kilometer*1000;    //  1 kilometer=1000 meter
     return meter;
}

var result=kilometerToMeter(7);
console.log(result);





//  2)calculator for total budget calculation.

function budgetCalculator(watch,mobile,laptop){
    var total=watch*50+mobile*100+laptop*500;
    return total;
    
}
var totalprice=budgetCalculator(1,2,2);
console.log(totalprice);






// 3) Caculating the total hotel cost on spending day

function hotelCost(day){
    if(day<=10){
        totalcost=day*100;  // for first 10 days
    }
    else if(day<=20){
      var firstcost=10*100;
      var remaining=day-10;
      var secondcost=remaining*80;
      var totalcost=firstcost+secondcost;  // code for more than 10 days but not more than 20 days

    }
    else{
        var firstcost=10*100;
        var secondcost=10*80;
        var remaining=day-20;                  
        var thirdcost=remaining*50;
        totalcost=firstcost+secondcost+thirdcost;   //code for more than 20 days 
        
    }
    return totalcost;

}
var totalpayment=hotelCost(71);
console.log(totalpayment); 




// 4)The biggest name finiding method

var friend=["rakib", "sakib" , "manik" , "rahim", "sayamaesha"];
var max=friend[0];
function megaFriend(friend){
    for(var i=0;i<friend.length;i++ ){
        var size=friend[i];
        if(size>max){
            max=size;
        }
    }
    return max;
}
var bigname=megaFriend(friend);
console.log("The biggest name is: ",bigname);