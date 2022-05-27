const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 200;

// get canvas context to draw in the canvas
const ctx = canvas.getContext("2d");
const car=new Car(100,100,30,50);
car.draw(ctx);