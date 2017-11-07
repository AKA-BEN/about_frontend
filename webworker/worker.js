
onmessage = function(e){
    var workerResult = '的值是：' + ( e.data[0]* e.data[1]);
    console.log('Message received from main script');
    postMessage(workerResult);
    console.log('Posting message back to main script');
}