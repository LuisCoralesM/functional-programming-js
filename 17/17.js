function alphabeticalOrder(arr) {
    return arr.sort((a,b) => {return b < a})
}
  
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);