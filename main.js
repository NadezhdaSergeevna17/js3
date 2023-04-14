let count = 0;

document.getElementById('check').onclick = function () {
  if (count <= 0) {
    let sumSale = document.getElementById('mynum').value;
    sumSale = parseInt(sumSale);
    let out = document.getElementById('out');


    if (sumSale >= 200 && sumSale < 300) {
      out.innerHTML = `Ваша скидка: 3%. ${sumSale * 0.97} руб`;
    } else if (sumSale >= 300 && sumSale < 500) {
      out.innerHTML = `Ваша скидка: 5%. ${sumSale * 0.95} руб`;
    } else if (sumSale >= 500) {
      out.innerHTML = `Ваша скидка: 5%. ${sumSale * 0.93} руб`;
    }
  }
}


// задание 2

let coun2 = 0

document.getElementById('check1').onclick = function () {
  if (coun2 <= 0) {
    let lengthOfCircle = document.getElementById('mynum1').value;
    let perimeterOfSquare = document.getElementById('mynum2').value;
    let out1 = document.getElementById('out1');

    if (perimeterOfSquare / 4 > lengthOfCircle / Math.PI) {
      out1.innerHTML = 'Окружность помещается в квадрат';
    } else {
      out1.innerHTML = 'Окружность не помещается в квадрат';
    }
  }
}

// задание 3

let res = 0

document.getElementById('check2').onclick = function () {
  if (res <= 0) {
    let answer1 = document.getElementById('mynum3').value;
    let answer2 = document.getElementById('mynum4').value;
    let answer3 = document.getElementById('mynum5').value;
    let out3 = document.getElementById('out3');

    if (answer1.toUpperCase() == '4') {
      res += 2;
    }
    if (answer2.toUpperCase() == 'А') {
      res += 2;
    }
    if (answer3 == 'Собака') {
      res += 2;
    }

    out3.innerHTML = `Количество набранных баллов: ${res}`;
  }
}