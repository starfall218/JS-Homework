const anotherClass = document.querySelectorAll('.another');
anotherClass.forEach(function (elem) {
  console.log(elem);
  elem.style.display = 'block';
  elem.style.textAlign = 'center';
  if (elem.innerHTML.includes('here')) {
    elem.style.backgroundColor = 'blue';
    elem.style.color = '#fff';
  }
});