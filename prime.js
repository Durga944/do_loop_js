var n = require("readline-sync");
const num = n.questionInt("enter any num--")
let i = 1;
var count = 0;
do {
    if(num%i==0) {
        count=count+1
    }
    i++;
}
while(i<=num){
    
}


if(count == 2){
    console.log("prime no..")
}else{
    console.log("not prime no")
}
