//I added a stopper to interations (roughly 5 seconds)
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

display();