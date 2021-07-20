let output = document.querySelector('.output');
let buttons = document.querySelectorAll('button');
 currenttext = "";

function updateDisplay(buttontext) {
    // console.log(buttontext);
    output.innerText += buttontext;
}
function deleteNumber(){
        output.innerText= output.innerText.slice(0,-1);
        //   console.log(output.innerText);
}

for (item of buttons) {
    item.addEventListener("click", (e) => {
        let buttontext = e.target.innerText;
           previous=buttontext;
        console.log(buttontext);
        if (buttontext == 'AC') {
            output.innerText=currenttext;
        }
        else if(buttontext == 'DEL')
        {
           deleteNumber();
        }

      else if(buttontext =='=')
      {
        //   console.log(output.innerText);
         output.innerText= eval(output.innerText);
          
        //   console.log(eval(output.innerText));
      }
      
      else
      {
          updateDisplay(buttontext);
      }
    }
    );
}

