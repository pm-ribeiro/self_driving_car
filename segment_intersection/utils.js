function drawPoint (point, label, isRed) {
  // Draw the round point with letter in center
  ctx.beginPath();
  ctx.fillStyle = isRed ? "red" : "white";
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

// Linear interpolation
// when t 0 return A (end points)
// when t 1 return B (end points)
// t is a percentage
function lerp(A, B, t) {
  return A+(B-A)*t;
}

function getIntersection(A, B, C, D) {
/**
 * The intersection point must sattify the following conditions:
 * Ix = Ax + (Bx - Ax)t = Cx + (Dx - Cx)u
 * Iy = Ay + (By - Ay)t = Cy + (Dy - Cy)u
 * ...
 * top = (Dx - Cx)(Ay - Cy) - (Dy - Cy)(Ax - Cx)
 * bottom = (Dy - Cy)(Bx - Ax) - (Dx - Cx)(By - Ay)
 * t = top / bottom
 */

  const top = (D.x - C.x)*(A.y - C.y) - (D.y - C.y)*(A.x - C.x);
  const bottom = (D.y - C.y)*(B.x - A.x) - (D.x - C.x)*(B.y - A.y)
  const t = top / bottom
  return {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t)
  }
}