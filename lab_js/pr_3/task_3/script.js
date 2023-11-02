function moveBall(event) {
  const field = document.getElementById('field');
  const ball = document.getElementById('ball');

  const ballWidth = ball.clientWidth;
  const ballHeight = ball.clientHeight;

  const fieldLeft = field.offsetLeft;
  const fieldTop = field.offsetTop;

  let x = event.clientX - fieldLeft - ballWidth / 2;
  let y = event.clientY - fieldTop - ballHeight / 2;

  if (x < 0) {
    x = 0;
  } else if (x + ballWidth > field.clientWidth) {
    x = field.clientWidth - ballWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (y + ballHeight > field.clientHeight) {
    y = field.clientHeight - ballHeight;
  }

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}