function main () {
    var shapes = [];
  for(var j=0; j<7; j++) {
      shapes.push(
          rotate([0,0,j * 3], 
        translate([0,0,j], 
            partialHollowStar(7-j,3.5-j/2,1, 6)    
        )  )  
      )
      
      shapes.push(
          rotate([0,0,j * 3 + 180], 
        translate([0,0,j], 
            partialHollowStar((7-j)/2,(3.5-j/2)/1.5,1, 6)    
        )  )  
      )
  }
  return union(shapes);
}

function partialHollowStar(r, ir, h, s) {
    var points = []
    // let's do half a circle (2s + 1 points, 2s fence panels)
    var N = s * 2 + 1
    var delta = Math.PI/(s * 2)
    for(var i=0; i< N; i++) {
        var R = i % 2 === 0 ? ir : r
        points.push([
            R * Math.cos(i * delta),
            R * Math.sin(i * delta)
        ])
    }
    
    return linear_extrude({ height: h}, polygon(points))
    
}
