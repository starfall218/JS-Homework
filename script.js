const anotherClass = document.querySelectorAll('.another');
const box = document.querySelector('.box');
anotherClass.forEach(function (elem) {
  console.log(elem);
  box.style.height = '100vh';
  box.style.display = 'flex';
  box.style.flexDirection = 'column';
  box.style.alignItems = 'center';
  box.style.justifyContent = 'center';
  if (elem.innerHTML.includes('here')) {
    elem.style.backgroundColor = 'blue';
    elem.style.textAlign = 'center';
    elem.style.width = '100%';
    elem.style.color = '#fff';
  };
});