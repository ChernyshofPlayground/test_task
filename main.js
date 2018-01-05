var currentPos = 0;
var score = 0;
var isStoped = false;

function renderScore() {
  var scoreEl = document.getElementById('score');
  scoreEl.innerHTML = `${score}`;
}

function onClickBox(e) {
  var x = e.pageX,
      y = e.pageY;
  if (x > 320 && x < 350 && y > currentPos+20
      && y < currentPos+50) {
    currentPos = 0;
    score += 1;
    renderScore();
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

  var startButton = document.getElementById('start');
  startButton.addEventListener('click', function(e) {
    currentPos = 0;
    score = 0;
    isStoped = false;
    renderScore();
  });
}

document.body.onload = animate;

