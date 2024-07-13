// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
var toyotaCar = {
    model: "Camry",
    color: "black",
    motor: "petrol",
};
    /* Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
    Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.*/
    toyotaCar.getInfo = function() {
      for (let property in this) {
        if (this[property] && typeof this[property] !== 'function') {
          console.log(property + ": " + this[property]);
        }
      }
    }
  
  toyotaCar.getInfo();   

  // Додали нову властивість до об'єкта
  toyotaCar.carBody = "sedan";
  toyotaCar.getInfo(); 