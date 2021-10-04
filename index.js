function cleanNames(arr){
    const newArr = arr.map(function(str){
      return str.trim(); 
   })
   return newArr;
}

// Alternative Solution
const cleanNames = arr => {
    return arr.map(name => name.trim())
};

// More cleaner syntax
const cleanNames = arr => arr.map(name => name.trim());

// Proven to work 10.4.2021
const firstNames=fullNames.map(function(f){

  return f.first

})
