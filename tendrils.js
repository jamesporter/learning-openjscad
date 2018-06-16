function main () {
   var shapes = [];
   
   for(var i = 0; i < 10; i++){
       shapes.push(
         squiggle(
            [ Math.random() * 4 - 2,Math.random() * 4 - 2 ], 
            Math.random() * 180, 
            Math.round(Math.random() * 40), 
            Math.random() * 20         
         )
       )
   }
   return union(shapes);
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
           scale([
               1,
               1, 
               1.5 + sin(i * 18 + offset) + 0.5 * cos(i * 2)], 
            cube()
           )
        ))    
    }
    return union(shapes);
}
