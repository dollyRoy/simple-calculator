let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
         buttonText = e.target.innerText;
            console.log("Button text is",buttonText);
                if(buttonText=='x'){
                    buttonText ='*';
                    screenValue +=buttonText;
                }
                else if(buttonText=='='){
                        try{
                            screenValue= eval(screenValue);
                        }
                        catch{
                            screenValue='Error';
                        }
                }else if(buttonText=='AC'){
                    screenValue = '';
                }else if(buttonText=="CE"){
                    screenValue = screenValue.slice(0, -1);
                }
                else{
                    screenValue +=buttonText;
                }
                screen.value = screenValue;
    });
  
}