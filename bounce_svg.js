/*
Ibnul Jahan and Brian Leung

SoftDev2 pd7

All that Bouncin

2018-03-12    
*/

const pic = document.getElementById('notCanvas');
const h = pic.getAttribute("height");
const w = pic.getAttribute("width");

const rad = "40";
const colors = ["red","green","blue"];

var animation


var balls = [];

/*
Ball properties:
color
vertical velocity
horizontal velocity
position x 
position y
radius
*/
var makeBall = function()
{
	var ball = new Object();
	
	var x = Math.floor(Math.random()*500);	
	var y = Math.floor(Math.random()*500);
	ball.position = [x,y];

	var v = Math.floor(Math.random()*20) - 10;	
	var h = Math.floor(Math.random()*20) - 10;
	ball.velocity = [h,v];

	ball.color = colors[Math.floor(Math.random()*3)];
	ball.radius = rad;

	ball.display = function()
	{
	    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    cir.setAttribute("cx", ball.position[0]);
	    cir.setAttribute("cy", ball.position[1]);
	    cir.setAttribute("r", ball.radius);
	    cir.setAttribute("fill", ball.color);
	    cir.setAttribute("stroke", "black");
		pic.appendChild(cir)
	}
	ball.refH = function()
	{
		ball.velocity[0]*=-1
	}
	ball.refV = function()
	{
		ball.velocity[1]*=-1
	}	

	balls.push(ball);
}

var updateFrame = function()
{
	clear();
	for (i = 0; i<balls.length; i++)
	{
		balls[i].position[0] += balls[i].velocity[0];
		if (balls[i].position[0]>500 || balls[i].position[0]<0)
		{
			balls[i].refH();
		}
		
		balls[i].position[1] += balls[i].velocity[1]
		if (balls[i].position[1]>500 || balls[i].position[1]<0)
		{
			balls[i].refV();
		}
		
		balls[i].display()
	}
	animation = window.requestAnimationFrame(updateFrame)
}

const clear = function()
{
	while(pic.children.length)
	{
		pic.firstChild.remove();
	}
}

document.getElementById("notCanvas").addEventListener("click", makeBall);

updateFrame();
