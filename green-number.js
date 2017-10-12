<html>
<head>
  <script src="bignumber.min.js"></script>
  </head>
  <body>
  <h2 id="answer"></h2>

  <script>
  BigNumber.config({ 
    DECIMAL_PLACES: 10000,
    EXPONENTIAL_AT: 10000	
  })
  
const getGreen = (n) => {
  if(n===1 || n==='1'){ return '1' }
  console.log(`1st green = 1`)
  if(n===2 || n==='2'){ return '5' }
  console.log(`2nd green = 5`)
  if(n===3 || n==='3'){ return '6' }
  console.log(`3rd green = 6`)
  
  let count = 3
  let greenArray = ['1','5']
  let greenArray2 = ['6']
  let currentGreen = new BigNumber('5')
  let currentGreen2 = new BigNumber('6')
  let ten = new BigNumber('10')
  
  for(var i = 1; i <= 1000000; i++){
    let places = currentGreen.toString().split('').length
    
    let test = currentGreen.plus(new BigNumber(i).times(ten.toPower(places)))

    if(testGreen(test)){
      currentGreen = test
      greenArray.push(currentGreen.toString())
      count++
	  console.log(`${count}th green = ${currentGreen}`)
      i = 0
		if(count === n){
			return currentGreen
		} else {
			for(var j = 1; j <= 1000000; j++){
				places = currentGreen2.toString().split('').length
			
				test = currentGreen2.plus(new BigNumber(j).times(ten.toPower(places)))

				if(testGreen(test)){
				  currentGreen2 = test
				  greenArray2.push(currentGreen2.toString())
				  count++
				  console.log(`${count}th green = ${currentGreen2}`)
				  j = 1000000
				  if(count === n){
					return currentGreen2
				  }
				}

			}
	  
		}
    }

  }
  
  
  return greenArray
  
}

const testGreen = (n) => {
  
  let n2 = (new BigNumber(n).times(n)).toString().split('').reverse()
  n = n.toString().split('').reverse()
   
   let isGreen = true
  
  n.forEach((val,idx)=>{
    if(val !== n2[idx]){
      isGreen = false
    }
  })
  return isGreen

}

document.getElementById('answer').innerHTML = getGreen(3000)
</script>
</body>
</html>