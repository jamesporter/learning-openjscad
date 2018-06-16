function main () {
  return union([
      squigle([0,0], 0, 20),
      squigle([0,0], 45, 20),
      squigle([0,0], 90, 20),
      squigle([0,0], 135, 20),
      ]
  )
}

function squigle(start, r, segments) {
    var shapes = [];
    for(var i=-segments; i<segments; i++){
        var x = i*0.6;
        var y = sin(i * 18);
        shapes.push(translate([
            x * cos(r) - y * sin(r),
            y * cos(r) + x * sin(r),
            0], 
           scale([1,1, 1.5 + sin(i * 18)], 
            cube()
           )
        ))    
    }
    return union(shapes);
}
