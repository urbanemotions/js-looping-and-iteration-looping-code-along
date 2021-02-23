function writeCards(name, event)
{
    let results = [];

    for (let i = 0; i < name.length; i++)
    {           
        results.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return results;
}


function countDown()
{
    let count = 10;
    while (count >= 0)
    {
        console.log(count);
        count-=1 
    }
}