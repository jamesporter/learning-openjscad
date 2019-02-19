// keyring with previous code

function main () {
    
  return union(
      keyring(),
      translate([0,7,0], keyring()),
      translate([0,-7,0], keyring()),
      translate([0,14,0], keyring())
  );
}

function keyring() {
    var shapes = [];
  
  for(var i=0; i<8; i++){
      for(var j=0; j<3; j++){
        if(!((i === 1) && ( j === 1 ) || (i === 0) && ( j === 0 )|| (i === 7) && ( j === 2)))
        shapes.push(hex(1.5 + Math.random(), i, j));
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
    if(x % 2 === 0) {
        dx = x * 1.5 * dh;
        dy = y * 2 * dv;
    } else {
        dx = x * 1.5 * dh ;
        dy = y * dv * 2 + dv;
    }
    
    var angle;
    var r = Math.random();
    if(r < 0.25){
        angle = 0;
    } else if(r < 0.5) {
        angle = 90;
    } else if(r < 0.75) {
        angle = 180;
    } else {
        angle = 270;
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
        rotate([0,15, angle],
        cube({ size: [6,6,4], center: true
            
        })))
        )
    )
}
