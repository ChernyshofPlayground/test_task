var currentPos = 0;
var score = 0;

function onClickBox(e) {
  var x = e.pageX,
      y = e.pageY;
  if (x > 320 && x < 340 && y > currentPos+20
      && y < currentPos+40) {
    currentPos = 0;
    score += 1;
    var scoreEl = document.getElementById('score');
    scoreEl.innerHTML = `${score}`;
  }
}

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  canvas.addEventListener('click', onClickBox);
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
  ctx.fillRect(320, currentPos, 20, 20);
  currentPos += 1;
  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;
  }

  requestAnimationFrame(animate);
}

document.body.onload = animate;
