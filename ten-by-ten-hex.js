
function main () {
    
  var shapes = [];
  
  for(var i=0; i<10; i++){
      for(var j=0; j<10; j++){
        shapes.push(hex(
            1.5 + Math.cos((i*0.8 + j*0.6 + i*j/9)/2 + i/3) + j/10, 
            i, 
            j
            )
        );
      }
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
