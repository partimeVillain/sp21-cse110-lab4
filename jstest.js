function discountedPrices(prices, discount)
{
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i< length; i++)
    {
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100)/100
        discounted.push(finalPrice);
    }

    
    
}

let student = {
    name: "hello",
    'Grad Year': '2020',
    greeting: function() {console.log('hello');},
    'Favorite Teacher':{
        name: 'Liu ',
        course: 'cse 191'
    },
};

function modifyArray(array, callback) {
    const newArr = [];
    for(let i = 0; i<array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num){
    return num *2;
}

function display()
{
    let counter = 0;
     
    let limit = setInterval(function()
    {      
        let d = new Date(); 
        let time = d.toLocaleTimeString();
        console.log(time)
        counter++;
        if(counter === 5)
        { 
            clearInterval(limit);
            counter = 0;
        }
    }, 1000);
;    
}

function printNums()
{
    console.log(1);
    setTimeout(function(){ console.log(2);}, 1000);
    setTimeout(function(){ console.log(3);}, 0);
    console.log(4);
}
printNums();
//display();
//console.log(modifyArray([1,2,3], doSomething));
