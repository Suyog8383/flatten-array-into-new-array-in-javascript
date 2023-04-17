const givenArr = [1, [2], [3, [4, [3]], [1]], [2], [[[{}, "abc", ""], 2]], 3];
// result [1,2,3,4,3,1,2,"abc",2,3]

function convertArray(input){
    let result=[];
    
    const recursiveFunction = (arr) => {
        
    for (const key in arr) {
      if (Array.isArray(arr[key])) {
        recursiveFunction(arr[key])
      }
      else if(typeof arr[key]==='number' || typeof arr[key]==='string' && arr[key] !=='' ){
        result.push(arr[key])
      }
    }
  }
  recursiveFunction(input);
  return result;
}

console.log(convertArray(givenArr))
