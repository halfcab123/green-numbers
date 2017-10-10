const isGreen = (n) => {
  let count = 0
  for(var i = 1; i < 10; i++){
    if(testNums(i,i*i)){
      count++
      if(count === n){
        return i
      }
    }
  }
  
  return 'didn\'t find the nth green number with the current loop constraint'
}

const testNums = (n1,n2) => {
  n1 = n1.toString().split('').reverse()
  n2 = n2.toString().split('').reverse()
  let green = false
  
  n1.forEach((val,idx)=>{
    if(val === n2[idx]){
      green = true
    }
  })
  return green
}
