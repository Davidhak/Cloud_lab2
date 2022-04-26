const express = require('express');
const app = express();

const serverPort = process.env.PORT || 3000;

app.get('/calc', function (req, res) {
  let numberOne = 0;
  let numberTwo = 0;

  let operation = req.query.operation;

  try {
    numberOne = parseInt(req.query.numberone);
    numberTwo = parseInt(req.query.numbertwo);

    if ((typeof (operation) === 'string') && typeof (numberOne) === 'number' && typeof (numberTwo) === 'number') {
      if ((operation === 'add') || (operation === 'sub') || (operation === 'div') || (operation === 'mul')) {
        let result = calc(operation, numberOne, numberTwo);
        res.json(result);
      }
    }
  } catch {
    res.json(null);
  }
});

app.listen(serverPort, () => {
  console.log("Server listening on port: " + serverPort);
});

function calc(operator, one, two) {
  let result = 0;

  if (operator == 'add') {
    result = one + two;
  } else if (operator == 'sub') {
    result = one - two;
  } else if (operator == 'div') {
    result = one / two;
  } else if (operator == 'mul') {
    result = one * two;
  }
  return result;
}