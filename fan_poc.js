function main () {
  var shapes = []
  
  shapes.push(fan())
  
  return union(
    shapes
  )
}


function fan() {
    var shapes = []
    for(var i=0; i<=15; i++){
        shapes.push(
            rotate([0,0,i*6], cube({ size: [5 + 5 * sin(16*i),0.25,1]}))    
        )
    }
    shapes.push(
        
            rotate([0,0,40],
            translate([-1,-0.25,0], 
                cube({size: [2,1,1]}))))
    return union(shapes);
}
