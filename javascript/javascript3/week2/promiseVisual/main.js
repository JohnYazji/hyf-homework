// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved. 
/* const translateOneByOne = () => {
moveElement(document.getElementById("red"), {
    x: 20,
    y: 310
    })
    .then(() => {
    console.log("Element has been moved");
  
     return moveElement(document.getElementById("blue"), {
      x: 400,
      y: 300
     });
    })
  
     .then(() => {
      console.log("Element has been moved");
      return moveElement(document.getElementById("green"), {
       x: 400,
      y: 15
        });
      })
  
  };
  
  translateOneByOne(); */

  const red = moveElement(document.querySelector('li:nth-child(1)'), { x: 20, y: 300 })
  const blue = moveElement(document.querySelector('li:nth-child(2)'), { x: 400, y: 300 })
  const green = moveElement(document.querySelector('li:nth-child(3)'), { x: 400, y: 20 })
  
  Promise.all([red, blue, green])
      .then(() => {
          console.log('All elements have been moved')
      })
     