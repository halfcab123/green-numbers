const getGreen = (n) => {
  if(n===1 || n==='1'){ return '1' }
  
  let count = 1
  let greenArray = ['1']
  let currentGreen = '5'
  
  for(var i = 1; i <= 100; i++){
    
    let places = Math.pow(10,currentGreen.toString().split('').length)
    
    let test = parseInt(currentGreen) + (i * places)

    if(testGreen(test)){
      currentGreen = test
      greenArray.push(currentGreen.toString())
      count++
      i = 1
      if(count === n){
        return currentGreen
      }
    }

  }
 
  return greenArray
  
}

const testGreen = (n) => {
  
  let n2 = (n * n).toString().split('').reverse()
  n = n.toString().split('').reverse()
   
   let isGreen = true
  
  n.forEach((val,idx)=>{
    if(val !== n2[idx]){
      isGreen = false
    }
  })
  return isGreen

}