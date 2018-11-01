var arr = [1,2,3,4,5,6,7,8,9];

function foo(pos){  
    if (!arr[pos]){
        return 0;
    }
    console.log(arr[pos]);
    return arr[pos]+foo(pos+1);  
}
console.log(foo(0));