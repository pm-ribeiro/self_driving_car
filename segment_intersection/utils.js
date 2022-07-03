function drawPoint (point, label) {
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