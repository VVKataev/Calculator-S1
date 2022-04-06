

  let a = ''; // first number
  let b = ''; //second number
  let sign = '';

  let finish = false;
  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const action = ['-', '+', 'X', '/', '+/-', '%'];

  // Screen
  const out = document.querySelector('.calc_screen p');

  function clearALL() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

  document.querySelector('.ac').onclick = clearALL;

  document.querySelector('.buttons').onclick = (event) => {
  //clicked not button
  if (!event.target.classList.contains('btn')) return;
  //clicked crearALL button AC
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //get pressed button
  const key = event.target.textContent;
  //button [1-9 or dot] if
  if (digit.includes(key)) {
    if (b==='' && sign ===''){
      a += key;
      out.textContent = a;}
    else if (a !== '' && b!=='' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {
      b +=key
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  //action buttons check
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a,b,sign);
    return;
  }

  //EQUAL PRESSED
  if (key === '=') {

    if (b === '') b=a;
      switch (sign) {
        case "+":
        a = (+a) + (+b);
        break;
        case "-":
        a = (+a) - (+b);
        break;
        case "X":
        a = (+a) * (+b);
        break;
        case "/":
        a = (+a) / (+b);
        break;
        case "+/-":
        a = -a
        break;
        case "%":
        a = a / b * 100 + "%"
      }

  }

  finish = true;
  out.textContent = a;
  console.table(a,b,sign)

}
