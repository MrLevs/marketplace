"use strict";

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

//Menu Burger
var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
//Timer
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  var deadline = new Date(2022, 11, 31);
  // id таймера
  var timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    var diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $hours.dataset.title = declensionNum(hours, ['Hours', 'Hours', 'Hours']);
    $minutes.dataset.title = declensionNum(minutes, ['Minutes', 'Minutes', 'Minutes']);
    $seconds.dataset.title = declensionNum(seconds, ['Seconds', 'Seconds', 'Seconds']);
  }
  // получаем элементы, содержащие компоненты даты

  var $hours = document.querySelector('.timer__hours');
  var $minutes = document.querySelector('.timer__minutes');
  var $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
var mixer = mixitup('.nft-card__content', {
  load: {
    filter: '.created'
  }
});