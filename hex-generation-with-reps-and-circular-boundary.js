// generate a hex based grid from repeated random walks, with hard, circular boundary

function main () {
    
  var x,y,n;
  var reps = 0;
    
  var steps = {};
  
  var k, r, p;
  
  var softB = 6;
  var bStr = 0.7;
  
  var maxRad = 7;
 
 while(reps < 10){
     x = 0;
     y = 0;
     n = 0;
  while(n < 100) {
     k = x + ":" + y;
     if(steps[k]) {
         steps[k].h++;
     } else {
         steps[k] = {
             x: x, y: y, h: 1
         }
     }
     
     r = Math.random();
     p = Math.random();
     
     if(r < 0.5) {
         if(x > softB) {
            x += (p > bStr ? 1 : -1)
         } else if(x < -softB) {
             x += (p < bStr ? 1 : -1)
         } else {
             x += (p < 0.5 ? 1 : -1)
         }
     } else {
         if(y > softB) {
             y += (p > bStr ? 1 : -1)
         } else if(y < -softB) {
             y += (p < bStr ? 1 : -1)
         } else {
             y += (p < 0.5 ? 1 : -1)
         }
     }
     n++;
  }
  reps++;
 }
  
  var shapes = [];
  
  for(var k in steps){
      var i = steps[k].x;
      var j = steps[k].y;
      var h = steps[k].h * 0.5;
      
      if(i*i + j*j < maxRad*maxRad)
        shapes.push(hex(Math.max(h, 1), i, j));
  }
  
  return union(
      shapes
  )
}

var pit = Math.PI/3;
var dv = Math.sin(pit);
var dh = 1;

function hex(h,x,y) {
    var dx,dy;
    if(x % 2 == 0) {
        dx = x * 1.5 * dh;
        dy = y * 2 * dv;
    } else {
        dx = x * 1.5 * dh ;
        dy = y * dv * 2 + dv;
    }
    return translate([dx, dy, 0],
        linear_extrude({height: h},
            polygon([
                [1,0],
                [Math.cos(pit),Math.sin(pit)],
                [-Math.cos(pit),Math.sin(pit)],
                [-1,0],
                [-Math.cos(pit),-Math.sin(pit)],
                [Math.cos(pit),-Math.sin(pit)],
            ])
        )
    )
}
