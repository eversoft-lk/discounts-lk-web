// ====== pre-loader ======
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("preloaderCanvas");

  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var mouse = {
    x: undefined,
    y: undefined,
  };

  var maxDistance = 100;
  var lines = [];
  for (var i = 0; i < 50; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
    });
  }

  function drawLine(line, color = "#E85838", thickness = 1) {
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + 20, line.y + 20);
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(function (line) {
      let dx = mouse.x - line.x;
      let dy = mouse.y - line.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxDistance) {
        let moveAwayFactor = 1 + (maxDistance - distance) / maxDistance;
        line.vx = (line.vx + (dx / distance) * moveAwayFactor) * -1;
        line.vy = (line.vy + (dy / distance) * moveAwayFactor) * -1;
      }
      line.x += line.vx;
      line.y += line.vy;
      if (line.x > canvas.width || line.x < 0) {
        line.vx *= -1;
      }
      if (line.y > canvas.height || line.y < 0) {
        line.vy *= -1;
      }
      drawLine(line);
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
});
