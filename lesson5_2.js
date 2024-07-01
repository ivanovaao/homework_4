var num ;
function findNonMultiplicity (num)
{
for (let i=1; i<=100; i++) 
    { 
       if (i % num != 0)
            { 
             console.log(i); 
            } 
    }
}
findNonMultiplicity(3);