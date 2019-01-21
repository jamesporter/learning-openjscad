// Unlike previous one I think equations for x/y adjustment actually correct in general

function main () {
    
  var shapes = [];
  
  for(var i=0; i<5; i++){
      for(var j=0; j<5; j++){
        shapes.push(hex(2 + Math.random(), i, j));
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
        difference(
        linear_extrude({height: h},
            polygon([
                [1,0],
                [Math.cos(pit),Math.sin(pit)],
                [-Math.cos(pit),Math.sin(pit)],
                [-1,0],
                [-Math.cos(pit),-Math.sin(pit)],
                [Math.cos(pit),-Math.sin(pit)],
            ])
        ),
        translate([1,0, h + 1],
        rotate([0,22.5,0],
        cube({ size: [4,4,4], center: true
            
        })))
        )
    )
}
