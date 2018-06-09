function main() {
    var shapes = [];
    
    for(var r=2; r < 6; r++) {
        shapes = shapes.concat(circular(r, 6 - r));
    }
    
    return union(shapes);
}

function circular(radius, height) {
 var shapes = [];
  
  for(var i=0; i<90; i += 2) {
      
      shapes.push(
        translate([radius * sin(i*4), radius * cos(i*4),0.5 + height/2],
            scale([1,1,height],
                cube({ center: true})    
            )    
        )    
      );
  }
  
  return union(
    shapes
  );
}
