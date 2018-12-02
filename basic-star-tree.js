function main () {
    var shapes = [];
  for(var j=0; j<7; j++) {
      shapes.push(
        translate([0,0,j], 
            star(7-j,3.5-j/2,1, 5)    
        )    
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



