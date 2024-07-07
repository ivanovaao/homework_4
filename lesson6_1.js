function pad(row, addSymbol, amount, place) {

    let paddingLength = amount - row.length;
    if (paddingLength <= 0) {
        return row; 
    }
    
       let padding = addSymbol.repeat(paddingLength);
  
       if (place == true) {
        return padding + row;
    } else {
        return row + padding;
    }
}

console.log(pad('qwerty', '*', 7, true));  
console.log(pad('qwerty', '*', 7, false)); 
