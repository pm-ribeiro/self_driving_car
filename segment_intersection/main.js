// Canvas thats all the space avaible
segmentIntersectionCanvas.width = window.innerWidth;
segmentIntersectionCanvas.height = window.innerHeight;


// Setting the points
const A = {x: 200,  y: 150};
const B = {x: 150,  y: 250};
const C = {x: 50,   y: 100};
const D = {x: 250,  y: 200};


const ctx =segmentIntersectionCanvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(A.x, A.y);
ctx.lineTo(B.x, B.y);
ctx.moveTo(C.x, C.y);
ctx.lineTo(D.x, D.y);
ctx.stroke();

function drawPoint(point, label) {
  // Draw the round point with letter in center
  ctx.beginPath();
  ctx.fillStyle = "white";
  // https://www.w3schools.com/tags/canvas_arc.asp
  ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, point.x, point.y);
}

drawPoint(A, "A");
drawPoint(B, "B");
drawPoint(C, "C");
drawPoint(D, "D");