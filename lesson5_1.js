/*Реализовать 2-мя способами:
1) с помощью цикла for
2) c помощью цикла while*/

var result = "";
var addSymbol = "";
var n, i;
//1
function drawTriangle(n, addSymbol)
{
    for(i = 1; i <= n; i++)
      {
         result += addSymbol;
         console.log(result);    
      }

}
drawTriangle(5, "*");

//2
/*function drawTriangle(n, addSymbol)
{  
  while (result.length<=n)
      {             
        console.log(result);  
        result += addSymbol;   
       }             
}
drawTriangle(8, ":");*/
