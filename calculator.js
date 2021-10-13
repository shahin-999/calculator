var screen = document.getElementById('txt-fild');
var historyScreen = document.getElementById('history');
var button = document.querySelectorAll('button');

var allValue = '' , historyValue='';
for (item of button){
    item.addEventListener('click', (v)=>{
        var buttonText = v.target.innerText;
        let temp = allValue[allValue.length-1]
        if( (temp == '+' || temp == '-' || temp == '*' || temp == '/') && (buttonText == '+' || buttonText == '-' || buttonText == '×' || buttonText == '÷') ){
            allValue = allValue.substring(0,allValue.length-1);
        }
        if(buttonText == '×'){
            buttonText = '*';
            allValue += buttonText;
            screen.value = allValue;
        }

        else if(buttonText == '÷'){
            buttonText = '/';
            allValue += buttonText;
            screen.value = allValue;
        }

        else if(buttonText == 'C'){
            allValue='';
            historyValue = '';
            screen.value=allValue;
            historyScreen.innerText =historyValue;
        }

        else if(buttonText == '←'){
            allValue=allValue.substring(0,allValue.length-1);
            screen.value=allValue;
        }

        else if(buttonText == '='){
            historyValue = allValue;
            allValue = eval(allValue);
            screen.value = allValue;
            historyScreen.innerHTML = historyValue;
            if (allValue == '' || allValue == '0'){
                allValue='';
            }

        }

        else{
            allValue += buttonText;
            screen.value = allValue;
        }

    });
}