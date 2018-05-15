const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/quienessomos', (req, res) =>

res.send('Quienes somos'));

app.get('/multiplica/:num1/:num2', (req, res) => {
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  if (isNaN(num1) || isNaN(num2)){
    res.send(`los parametros ${num1} y ${num2} deben ser numeros`);
  } else {
    res.send(`la multiplicacion de ${num1} x ${num2} = ` + num1*num2);
}
});

app.get('/junta/:var1/con/:var2', (req, res) => {
  var var1=req.params.var1;
  var var2=req.params.var2;
    res.send(`Tu string concatenado es ${var1 + ' ' + var2}`);
});

app.use( (req, res, next) => {
  res.status(404);
  res.json({
    "error": "Error. Route not found"
  });
});

app.listen(3000, () => console.log('Servidor levantado en 3000'));
