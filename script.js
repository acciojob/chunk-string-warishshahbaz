function stringChop(str, size) {
  let result = [];
    for(let i=0; i<str.length; i +=size){
      let chunk = str.slice(i,i+size);
        result.push(chunk);
       
       
    }
     return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
