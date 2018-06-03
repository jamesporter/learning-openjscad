function main () {
    
  var shapes = [];    

  for(var i=0; i<100; i++ ) {
    shapes.push(
      rotate([0,0,i*12],
        translate([3 - i/40,0,0],
          scale([1,1,0.5 + i/20],
            cube()
          )
        )
      )    
    );      
  }
  return union(shapes);
}
