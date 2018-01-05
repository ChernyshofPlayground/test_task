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

function onClickStart(_e) {
  currentPos = 0;
  score = 0;
  isStoped = false;
  renderScore();
}

function onClickStop(_e) {
  console.log("kek");
  currentPos = 0;
  score = 0;
  isStoped = true;
  renderScore();
}

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  canvas.addEventListener('click', onClickBox);
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
  if (!isStoped) {
    ctx.fillRect(320, currentPos, 20, 20);
  }
  currentPos += 1;
  if(currentPos >= canvas.clientHeight) {
    currentPos = 0;
  }

  requestAnimationFrame(animate);

  var startButton = document.getElementById('start');
  var stopButton = document.getElementById('stop');
  startButton.addEventListener('click', onClickStart);
  stopButton.addEventListener('click', onClickStop);
}

document.body.onload = animate;
