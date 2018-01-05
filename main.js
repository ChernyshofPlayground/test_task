var score = 0;
var isStoped = false;
var boxes = [];


function renderScore() {
  var scoreEl = document.getElementById('score');
  scoreEl.innerHTML = `${score}`;
}

function onClickBox(width) {
  return function (e) {
    var x = e.pageX,
        y = e.pageY;
    boxes = boxes.filter(function(box) {
      if (x > box.left && x < box.left+30 && y > box.currentPos+20
          && y < box.currentPos+50) {
        score += 1;
        renderScore();
        return false;
      }

      return true;
    });
  }
}

function onClickStart(_e) {
  if (!isStoped) {
    score = 0;
    boxes = [];
  }
  isStoped = false;
  renderScore();
}

function onClickStop(_e) {
  isStoped = true;
  boxes = [];
  renderScore();
}

function animate() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  canvas.addEventListener('click', onClickBox(canvas.clientWidth));
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);  
  if (!isStoped) {
  }

  if (!isStoped && Math.random() > 0.98) {
    var left = Math.random() * (canvas.clientWidth + 30) - 60;
    var speed = Math.random() * 3 + 1;
    boxes.push(
      {
        left: left,
        speed: speed,
        currentPos: 0
      }
    );
  }

  boxes = boxes.filter(function(box) {
    ctx.fillRect(box.left, box.currentPos, 20, 20);

    box.currentPos += box.speed;
    if(box.currentPos >= canvas.clientHeight) {
      return false;
    }
    return true;

    // if(box.currentPos >= canvas.clientHeight) {
    //   box.currentPos = 0;
    // }
  });
  

  requestAnimationFrame(animate);

  var startButton = document.getElementById('start');
  var stopButton = document.getElementById('stop');
  startButton.addEventListener('click', onClickStart);
  stopButton.addEventListener('click', onClickStop);
}

document.body.onload = animate;
