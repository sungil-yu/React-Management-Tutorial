// 4. Rest parameters
function printAll(...args){

    // for(const arg of args){
    //     console.log(arg);

    // }

    args.forEach((arg) => console.log(arg));
}

printAll(1,2,3,4,5,6,7);