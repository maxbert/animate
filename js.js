var can = document.getElementById("can");
var ctx = can.getContext('2d');
var rid;

var makecirc = function(e){
    window.cancelAnimationFrame( rid );
    var r = 0;
    var direction = false;
    var drawdot = function(e){
	ctx.clearRect(0,0,800,600);
	ctx.arc(400,300,r ,0,Math.PI*2);
	ctx.stroke();
	if (direction == false){
	    r++;
	}else{
	    r--;
	};

	if(r >= 300){
	    direction = true;
	};
	if( r <= 20){
	    direction = false;
	}

	ctx.fillStyle= "#C0FFEE";
	ctx.fill();
	ctx.beginPath();
	rid =window.requestAnimationFrame( drawdot );
    }
    drawdot();
}

    
var animatedot = function(e){
    window.cancelAnimationFrame( rid);
    var x = 0;
    var y = (Math.random() * 600);
    var r = 20;
    var d = 1;
    var direction = false;
    var ydirection = false;
    var drawdot = function(e){
	ctx.clearRect(0,0,800,600);
	ctx.arc((x % 800),(y% 600),20 ,0,Math.PI*2);
	ctx.stroke();
	d+= 10;
	ctx.fillStyle= "#DECAFF";
	ctx.fill();
	ctx.beginPath();
	if (direction == false){
	    x++;
	}else{
	    x--;
	};

	if (ydirection == false){
	    y+=2;
	}else{
	    y-=2;
	};
	
	if (x == 799){
	    direction = true;
	};
	if (x == 0){
	    direction = false;
	};
	if (y >= 599){
	    ydirection = true;
	};
	if (y <=  0){
	    ydirection = false;
	};
	//console.log(y);
	rid =window.requestAnimationFrame( drawdot )
    };

    drawdot();
}


var stop = function(e){
    window.cancelAnimationFrame( rid );
};
document.getElementById("start").addEventListener("click",animatedot);
document.getElementById("stop").addEventListener("click",makecirc);
document.getElementById("end").addEventListener("click",stop);

