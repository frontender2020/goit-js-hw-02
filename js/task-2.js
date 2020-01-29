const calculateEngravingPrice = function(message, pricePerWord) {
  message = message.split(" ");

  let total = 0;

  for (let i = 0; i < message.length; i += 1) {
    if ((message.length[i] = pricePerWord)) {
      total = pricePerWord * message.length;
    }
  }

  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
