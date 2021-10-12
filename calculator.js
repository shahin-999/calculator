var screen = document.getElementById('txt-fild');
var button = document.querySelectorAll('button');

var allValue = '';

for (item of button){
    item.addEventListener('click', (value)=>{
        var buttonText = value.target.innerText;
        console.log(buttonText);

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
            screen.value=allValue;
        }

        else if(buttonText == '←'){
            allValue=allValue(0,-1);
            screen.value=allValue;
        }

        else if(buttonText == '='){
            allValue = eval(allValue);
            screen.value = allValue;
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