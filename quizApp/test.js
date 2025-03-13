var temp  = [];
var arr = [2,3,2,3,5];
var count = 0
for(let i = 0 + 1; i<arr.length; i++){
    if(i == arr[i]){   
        count++;
    }
    temp.push(count) || 0;
    count = 0;
}
console.log(temp);