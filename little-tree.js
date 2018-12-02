function main () {
    var shapes = [];
  for(var j=0; j<8; j++) {
      var outer = 4-j/2;
      shapes.push(
          rotate([0,0,j*40],
        translate([0,0,j*0.666666666], 
            star(outer ,outer*0.75,0.666666666, 15-j)    
        )    )
      )
  }
  return union(shapes);
}

function star(r,ir, h,  sides) {
    var points = [];
    var delta = Math.PI / sides;
    for(var i=0; i<sides; i++) {
        // outer, then inner
        points.push([
            r * Math.cos(2*i*delta),
            r * Math.sin(2*i*delta)
        ])
        points.push([
            ir * Math.cos((2*i + 1)*delta),
            ir * Math.sin((2*i + 1)*delta)
        ])
    }
    
    console.log(points)
    
    return linear_extrude({height: h},
            polygon(points)
        )
}



