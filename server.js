var express = require('express');
var app = express();
var path = require('path');
const paypal = require('paypal-rest-sdk');
app.use(express.static(path.join(__dirname,'public')));
app.get('/paypal', function (req, res) {
  paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AiPC9BjkCyDFQXbSkoZcgqH3hpacA2Jc5DM3sAlsJE.14jUIC-yRYi6t',
    'client_secret': 'EN-w8Y4ZNdfesUKRrGljvtDZEu64uGGkKWqIpHfTaERapnaGoXQoqVRSTQ7rUxqHzDwp1VhKjbCYn4lQ'
  });
  var create_payment_json = {
          "intent": "authorize",
          "payer": {
              "payment_method": "paypal"
          },
          "redirect_urls": {
              "return_url": "http://localhost:3000/return",
              "cancel_url": "http://localhost:3000/cancel"
          },
          "transactions": [{
              "item_list": {
                  "items": [{
                      "name": "item",
                      "sku": "item",
                      "price": "10.00",
                      "currency": "EUR",
                      "quantity": 1
                  }]
              },
              "amount": {
                  "currency": "EUR",
                  "total": "10.00"
              },
              "description": "This is the payment description."
          }]
      };

      paypal.payment.create(create_payment_json, function (error, payment) {
          if (error) {
              console.log(error.response);
          } else {
              console.log(payment);
          }
      });
      var execute_payment_json = {
          "payer_id": "Appended to redirect url",
          "transactions": [{
              "amount": {
                  "currency": "USD",
                  "total": "1.00"
              }
          }]
      };

      var paymentId = 'PAYMENT id created in previous step';

      paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
          if (error) {
              console.log(error.response);
              throw error;
          } else {
              console.log("Get Payment Response");
              console.log(JSON.stringify(payment));
          }
      });
  res.send(paypal);
});
app.get('/return', function (req, res) {
  res.send("req");
});
app.get('/cancel', function (req, res) {
  res.send("req");
});
app.listen(3000);
