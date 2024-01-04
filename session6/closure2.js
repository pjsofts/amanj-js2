function makeAdder(x) {
    return function (y) {
      return 
      
      
      + y;
    };
  }
  
  const add5 = makeAdder(5);
  console.log(add5(100))