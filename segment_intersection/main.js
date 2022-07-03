// Canvas thats all the space avaible
segmentIntersectionCanvas.width = window.innerWidth;
segmentIntersectionCanvas.height = window.innerHeight;

// Setting the points
const A = {x: 200,  y: 150};
const B = {x: 150,  y: 250};
const C = {x: 50,   y: 100};
const D = {x: 250,  y: 200};

// --------------------------------------------------
function animate() {
  const radius = 50;
  A.x = mouse.x;
  A.y = mouse.y - radius;

  B.x = mouse.x;
  B.y = mouse.y + radius;

  ctx.clearRect(
    0,
    0,
    segmentIntersectionCanvas.width,
    segmentIntersectionCanvas.height
  );
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.moveTo(C.x, C.y);
  ctx.lineTo(D.x, D.y);
  ctx.stroke();

  drawPoint(A, "A");
  drawPoint(B, "B");
  drawPoint(C, "C");
  drawPoint(D, "D");

  const I = getIntersection(A,B,C,D);
  drawPoint(I, "I");

  requestAnimationFrame(animate);
};

// --------------------------------------------------
const ctx = segmentIntersectionCanvas.getContext("2d");

const mouse = {x:0, y:0};
document.onmousemove = (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
}

animate();
