function main() {
    var shapes = [];
    
    for(var r=2; r < 6; r++) {
        shapes = shapes.concat(circular(r, 6 - r, 15 * r));
    }
    
    return union(shapes);
}

function circular(radius, height, offset) {
 var shapes = [];
  
  for(var i=0; i<90; i += 2) {
      var h = height + sin(4 * i + offset) + 1
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
