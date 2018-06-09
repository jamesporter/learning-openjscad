function main () {
  var shapes = [];
  
  for(var i=0; i<90; i++) {
      shapes.push(
        translate([i/20 - 1.5 * sin(5 * i), 3 * sin(5 * i),0],
            scale([1,1,0.5 + i/20 + 0.2 * sin(10 * i)],
                cube()    
            )    
        )    
      );
  }
  
  for(var i=0; i<90; i++) {
      shapes.push(
        translate([-(i/20 - 1.5 * sin(5 * i)), -(3 * sin(5 * i)),0],
            scale([1,1,0.5 + i/20 + 0.2 * sin(10 * i)],
                cube()    
            )    
        )    
      );
  }
  
  return union(
    shapes
  );
}
