function main () {
    var shapes = [];
    var detail = 0.5;
    var maxJ = 25 / detail;
    var midJ = maxJ/2;
    
    for(var i=2; i<9; i++) {
        for(var j=0; j<maxJ; j++) {
            shapes.push(
                translate([i + 8 * Math.cos(Math.PI * (j - midJ)/ maxJ),j * detail,0],
                    cube({ size: [1, detail, 
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
