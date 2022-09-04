let string = ""
// let ac=document.getElementById('ac');
let ip = document.querySelector('input');
let buttons = document.querySelectorAll('.btn');
console.log(buttons);
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      ip.value = string;
    }
    else if (e.target.innerHTML == 'A/C') {
      string = "";
      ip.value = string;
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }


  })
})