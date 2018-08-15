function main () {
    var shapes = [];
    
    for(var i=1; i<9; i++) {
        for(var j=0; j<50; j++) {
            shapes.push(
                translate([i,j/2,0],
                    cube({ size: [1,0.5, 
                    Math.sin(i * j / 12 + i) + 1.5 + 0.2 * i
                    ] })
                )    
            )
        }
    }
    
  return union(
    shapes
  )
}
