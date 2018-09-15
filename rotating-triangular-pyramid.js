function main () {
  var shapes = [];
  for(var i = 0; i < 10; i++) {
      var s = 11 - i
    shapes.push(translate([0,0,i/2], rotate([0,0,i*3.5], 
    //centring... centroid 1/3 way along median:
    translate([0,-s * Math.sqrt(3)/6,0], c_triangle(s,0.5)))));
  }
  return union(shapes)
}

function c_triangle(s, h) {
    var dx = s/2;
    var dy = s * Math.sqrt(3)/2
    
    return linear_extrude({ height: h},
        polygon([[-dx, 0],[dx, 0],[0, dy]])
    )
}

function triangle_lattice(s,h,n) {
    var base = c_triangle(s,h)
    
    
}
