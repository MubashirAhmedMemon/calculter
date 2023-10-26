var input = document.getElementById("inputbox");
var buttons = document.querySelectorAll("button");
var string = "";
var ary = Array.from(buttons);
ary.forEach(btn => {btn.addEventListener(
        'click', function(e)  {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
            }
            else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;

            }
            else if (e.target.innerHTML == 'DEL'){
                string = string.substring(0,string.length - 1);
                input.value = string;
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    )

});
