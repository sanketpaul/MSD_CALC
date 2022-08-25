let display1=document.getElementById('screen1')
let display2=document.getElementById('screen2')
buttons=document.querySelectorAll('button')
// let btn1=document.getElementsByClassName('btn')
let screenValue=' ';
let h2=display1.innerText
console.log(h2)
for(let items of buttons){
    items.addEventListener('click',(e)=>{
     buttonText=e.target.innerText;
     if(buttonText=='AC'){
        screenValue=''
        display2.innerText=screenValue
        display1.innerText=screenValue
     }
     else if(buttonText==''){
        display2.innerText=display2.innerText.slice(0,-1)
        screenValue=display2.innerText
        
       
     }
     else if(buttonText=='X'){
        buttonText='*';
        screenValue+=buttonText;
        display2.innerText=screenValue;
        
     }
     else if(buttonText=='='){
        display1.innerText=eval(screenValue);
        
     }
     else if(buttonText=='%'){
        display1.innerText=(display1.innerText)/100
        screenValue+=buttonText
        display2.innerText=screenValue;
        // display1.innerText=screenValue;

     }
     else{
       screenValue+=buttonText;
       display2.innerText=screenValue
     }
   })
}

// dark mood
let container=document.querySelector('.container')
let display=document.getElementsByClassName('display')


const changemood=()=>{
    let mybody=document.body;
    mybody.classList.toggle('darkmood')
    container.classList.toggle('con_shadow')
    display.classList.toggle('darkmood')
    



}