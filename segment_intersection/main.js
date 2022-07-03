// Canvas thats all the space avaible
segmentIntersectionCanvas.width = window.innerWidth;
segmentIntersectionCanvas.height = window.innerHeight;


// Setting the points
const A = {x: 200,  y: 150};
const B = {x: 150,  y: 250};
const C = {x: 50,   y: 100};
const D = {x: 250,  y: 200};

const t = 0.5;
// Middle point A and B
const M = {
  x: lerp(A.x, B.x, t),
  y: lerp(A.y, B.y, t)
}

// Middle point C and D
const N = {
  x: lerp(C.x, D.x, t),
  y: lerp(C.y, D.y, t)
}

const ctx =segmentIntersectionCanvas.getContext("2d");
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
drawPoint(M, "M");
drawPoint(N, "N");