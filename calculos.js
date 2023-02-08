const d = document,
  $display = d.getElementById("display"),
  $numbers = d.querySelectorAll(".countable-number"),
  $signs = d.querySelectorAll('.signs'),
  $result = d.getElementById('resultado');
  
let firstNumber, currentNumber;

const sum = (a, b) => {
  return Number(a) + Number(b);
} 

const subtract = (a, b) => {
  return Number(a) - Number(b);
} 

const multiply = (a, b) => {
  return Number(a) * Number(b);
} 

const split = (a, b) => {
  return Number(a) / Number(b);
} 

const defineOperation = (operation) => {
  
  $signs.forEach(sign => {
    if (sign.id === operation) {
      return $display.textContent = `${firstNumber} ${operation} `;
    }
  })
  
}

const calculateResult = () => {

  let result
  
  if ($display.textContent.includes('+')) {
    result = sum(firstNumber, currentNumber);
  }
  
  if ($display.textContent.includes('-')) {
    result = subtract(firstNumber, currentNumber);
  }
  
  if ($display.textContent.includes('x')) {
    result = multiply(firstNumber, currentNumber);
  }
  
  if ($display.textContent.includes('%')) {
    result = split(firstNumber, currentNumber);
  }
  
  firstNumber = '';
  currentNumber = ''
  return $display.textContent = result;
  
}

$numbers.forEach(number => {
  number.addEventListener('click', () => {
  
    //Falta definir numeros con decimales
    // if (number.id === '.') {
    //   firstNumber += '.';
    //   $display.textContent = firstNumber;
    // }
    
    if (firstNumber) {
    
      currentNumber = number.id;
      $display.textContent += currentNumber;
      
    } else {
    
      firstNumber = number.id;
      $display.textContent = firstNumber;
      
    }

  })
})

$signs.forEach(sign => {
  sign.addEventListener('click', () => {
    defineOperation(sign.id);
  })
})

$result.addEventListener('click', () => {
  calculateResult();
})

module.exports = {
  sum,
  subtract,
  multiply,
  split,
  defineOperation,
}

