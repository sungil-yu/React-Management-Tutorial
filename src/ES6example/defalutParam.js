// 3. Defalut parameters

function showMessage(message, from = 'unknown'){

    // if(from === undefined){
    //     from = 'unknown';
    // }

    console.log(`${message} by ${from}`);

}


showMessage('hi');