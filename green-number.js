const pTen = (n) =>{
  return Math.pow(10,n) + 1
}

const nextGreen = (n) =>{
  n = n.toString()
  for(var i=9; i>=0; i--){
    
    if(i === 0){
    	n = n.padStart(n.length+1,'0')
      i = 10
	  }
    
    let test = n.padStart(n.length+1,i.toString())
    
    if(Math.pow(parseInt(test),2).toString().endsWith(test)){
      return test.toString()
      count++
    }
  }
}

let n = 10
let count = 3
let next5 = '5'
let next6,first,second

while(count<n){
next5 = nextGreen(next5)
next6 = pTen( next5.toString().length ) - next5
count+=2
first = next5 < next6 ? next5 : next6
second = next6 < next5 ? next5 : next6
null
}

if(n%2===0){ first } else { second }