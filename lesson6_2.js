var str;
function isNaNFunction(str){
if (str !== str) return true;
else return false;
}

console.log(isNaNFunction(NaN));
console.log(isNaNFunction(5));        
console.log(isNaNFunction('Anna'));      
console.log(isNaNFunction(undefined));