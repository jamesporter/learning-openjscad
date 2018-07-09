// Unlike previous one I think equations for x/y adjustment actually correct in general

function main () {
    
  var shapes = [];
  
  for(var i=0; i<15; i++){
      for(var j=0; j<15; j++){
        shapes.push(hex(Math.max(1,
            3 * Math.abs(Math.sin(i/4 + j/6)) + 
            0.4 * Math.sin(j*j)
            )
        , i, j));
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
