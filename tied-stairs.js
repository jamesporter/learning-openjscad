function main () {
    
  var shapes = [];    

  for(var i=0; i<100; i++ ) {
    shapes.push(
      rotate([0,0,i*12],
        translate([3 - i/40,0,0],
          scale([1.2,1, Math.max(1, 0.5 + i/20 + 3 * Math.sin(i/10))],
            cube()
          )
        )
      )    
    );      
  }
  return union(shapes);
}
