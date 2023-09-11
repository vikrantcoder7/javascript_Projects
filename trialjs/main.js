const getform = document.querySelector('form')

console.log(getform);
// this usecase will give you empty value
const height = parseInt(document.querySelector("#Height").value)

getform.addEventListener('submit', function(e)
{
    
      e.preventDefault();
      
      const height =   parseInt(document.getElementById('Height').value);
      const weight = parseInt(document.getElementById('Weight').value);  
      const results =  document.getElementById('results');


      if(height === ''  || height < 0 || isNaN(height) ) 
      {
          results.innerHTML = `please give a valid height ${height}`;
      }
      else if(weight === '' || weight < 0 || isNaN(weight))
      {
         results.innerHTML = `please give a valid Weight ${weight}`;
      }
      else
      {
         
          const BMI = (weight / ((height*height)/10000)).toFixed(2);
          
          if(BMI < 18.6 || BMI == 18.6){
            
            results.innerHTML = `Your BMI is ${BMI} and it's in underweight Range`

          }
          else if(BMI > 18.6 && BMI < 24.9){
             results.innerHTML = `Your BMI is ${BMI} and it's in Normal Range`
          }
          else if(BMI > 24.9 || BMI == 24.9 )
          {
             results.innerHTML = `Your BMI is ${BMI} and it's in Overweight Range`
          }
      }
           
  
})

const clickbtn = document.querySelector("#clickedbtn");

console.log(clickbtn);