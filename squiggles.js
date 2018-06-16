function main () {
  return union([
      squiggle([0,0], 0, 20, 0),
      squiggle([2,0], 55, 20, 60),
      squiggle([0,3], 90, 20, 20),
      squiggle([1,-1], 145, 20, 30),
      ]
  )
}

function squiggle(start, r, segments, offset) {
    var shapes = [];
    for(var i=-segments; i<segments; i++){
        var x = start[0] + i*0.5 + 0.5 * cos(i * 9);
        var y = start[1] + sin(i * 18);
        shapes.push(translate([
            x * cos(r) - y * sin(r),
            y * cos(r) + x * sin(r),
            0], 
           scale([1,1, 1.5 + sin(i * 18 + offset)], 
            cube()
           )
        ))    
    }
    return union(shapes);
}
