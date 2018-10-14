function main () {
    
  var dx = -2
  var dy = -3
    
  var shapes = []
  
  shapes.push(fan())
  shapes.push(translate([-9,-7,0], fan()))
  shapes.push(translate([0,-7,0], fan()))
  
  shapes.push(translate([dx - 2.5, dy + 3,0], base(0.5)))
  shapes.push(translate([dx - 2.5,dy + 7,0], base(1)))
  shapes.push(translate([dx -5, dy + 5,0], base(0.75)))
  
  return union(
    shapes
  )
}


function fan() {
    var shapes = []
    for(var i=0; i<=15; i++){
        shapes.push(
            rotate([0,0,i*6], cube({ size: [5 + 5 * sin(16*i),0.25,0.5]}))    
        )
    }
    shapes.push(
        
            rotate([0,0,40],
            translate([-1,-0.25,0], 
                cube({size: [2,1,0.5]}))))
    return union(shapes);
}

function base(h) {
    return difference(
        cube({ size: [3,3,h]}),
        translate([1, 1.275],
            
            cube({ size: [1, 0.55, h]})
        )
    )
}
