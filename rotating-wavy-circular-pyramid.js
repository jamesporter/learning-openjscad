function main() {
    var shapes = [];
    
    for(var r=2; r < 6; r++) {
        shapes = shapes.concat(circular(r * 0.9, 6 - r, 30 * (r-2)));
    }
    
    return union(shapes);
}

function circular(radius, height, offset) {
 var shapes = [];
  
  for(var i=0; i<90; i += 2) {
      var h = height + sin(8 * i + offset) + 1
      shapes.push(
        translate([radius * sin(i*4), radius * cos(i*4),0.5 + h/2],
            scale([1,1,h],
                cube({ center: true})    
            )    
        )    
      );
  }
  
  return union(
    shapes
  );
}
