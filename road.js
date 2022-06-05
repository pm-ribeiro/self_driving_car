class Road{
  constructor(x, width, laneCount = 3){
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width/2;
    this.right = x + width/2;

    const infinity = 1000000;

    //!!IMPORTANT: Y in a computer grows downwards
    this.top = -infinity;
    this.bottom = infinity;
  }

  draw(ctx){
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";

    for(let i = 0; i <= this.laneCount; i++){
      const x = lerp(
        this.left,
        this.right,
        i/this.laneCount
      );
    }

    // drwa line to the left side of the road
    ctx.beginPath();
    ctx.moveTo(this.left, this.top);
    ctx.lineTo(this.left, this.bottom);
    ctx.stroke();

    // drwa line to the right side of the road
    ctx.beginPath();
    ctx.moveTo(this.right, this.top);
    ctx.lineTo(this.right, this.bottom);
    ctx.stroke();
  }
}

// linear interpolation
// t is a percentage
function lerp(A,B,t) {
  return A+(B-A)*t;
}