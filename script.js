

// pegar o valor da conta total 



let newTotal = 0
let newTip = 0


//adicionar a porcentagem de gorjeta

  
  
  function getTip(){

    const total = parseInt(document.getElementById('bill').value)

    let tip = document.getElementById('groupTips')

    
    tip.addEventListener('click', function(event){

      newTip = parseInt(event.target.value)
      let total2 = total*newTip
      let almostnewTotal = total2/100
      let newTotal = total+almostnewTotal
      newTotal
      newTip
      
      validatePeople()
      getValues(almostnewTotal, newTotal)
    })
    
  }
  //verificar pelo numero de pessoas (validar se o campo está preenchido)
  
  function validatePeople(){
    
    let numberOfPeople = document.getElementById('numberOfPeople').value
    let mensError = document.createElement('div')

    numberofPeople.appendChild(mensError)
    mensError.setAttribute('id', "ola")

    console.log(numberOfPeople)

    if(numberOfPeople == ''){
      
      mensError.innerText = 'Preencha a quantidade de pessoas na mesa'
      
    } 
    
    if(mensError.innerText !== ''){

      mensError.innerText = ''
      
      
    }


    
      
 
}


//imprimir o valor total da gorjeta 


function getValues(almostnewTotal, newTotal){

  let tipAmount = document.getElementById('tipAmount')
  let numberOfPeople = document.getElementById('numberOfPeople').value
  let newTip = almostnewTotal
  // tipAmount.innerText = newTip
  console.log(newTip)
  tipAmount.innerHTML = almostnewTotal/numberOfPeople

  let totalPerson = document.getElementById('totalPerson')

  let totalFull = newTotal/numberOfPeople

  totalPerson.innerText = totalFull

}


//imprimir o valor total da conta por pessoa




//   function calcTip(newTotal){
 
//     // let tip = document.getElementById('groupTips')
  
//     console.log('calc '+ newTotal)
   
//   // let newTotal1 = tip.addEventListener('click', function(event){
    
//   //   let newTip = parseInt(event.target.value)
//   //   let total2 = total*newTip
//   //   let almostnewTotal = total2/100
//   //   let newTotal = total+almostnewTotal
//   //   let teste =newTotal
//   // //   return teste
   
   
//   // // })
//   // console.log(newTotal1)
  
 
// }

  











