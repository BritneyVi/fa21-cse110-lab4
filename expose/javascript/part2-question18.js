function printTime() 
{
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
};

setInterval(printTime, 1000);
