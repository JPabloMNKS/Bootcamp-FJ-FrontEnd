// 1. Sebastian, Carla, Gustavo, Pablo

(function () {
    console.log('this is the start');               
    setTimeout (function cb() {
        console.log('from call back');              
    });
    console.log('this is just a message');          
    setTimeout (function cb1() {
        console.log('this is a msg');               
    }, 0);
    console.log('this is the end');         
})();

