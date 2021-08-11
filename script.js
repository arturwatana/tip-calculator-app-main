

// pegar o valor da conta total 
const total = parseInt(document.getElementById('bill').value)





//adicionar a porcentagem de gorjeta

const addTip = {
  
  getTip(){
    let tip = document.getElementById('groupTips')
    let newTip = 0
    tip.addEventListener('click', function(event){

      newTip = parseInt(event.target.value)
      
     
     
    })
    return newTip
  },
 

  calcTip(){
 
    // let tip = document.getElementById('groupTips')
  
    let tip = this.getTip()
    console.log('Segundo' + tip)
  // let newTotal1 = tip.addEventListener('click', function(event){
    
  //   let newTip = parseInt(event.target.value)
  //   let total2 = total*newTip
  //   let almostnewTotal = total2/100
  //   let newTotal = total+almostnewTotal
  //   let teste =newTotal
  // //   return teste
   
   
  // // })
  // console.log(newTotal1)
  
 
},

  

}

addTip.calcTip()


//verificar pelo numero de pessoas (validar se o campo está preenchido)



//imprimir o valor total da gorjeta 

//imprimir o valor total da conta por pessoa