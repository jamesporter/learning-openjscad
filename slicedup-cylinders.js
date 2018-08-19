function main () {
  var shapes = [];
   
  for(var i=0; i < 4; i++) {
      for(var j=0; j < 4; j++) {
        
        shapes.push(
            translate([7*i, 7*j, 0], 
                rotate([0,0,(i + j)*60],
                    scale([1,1,(3 - Math.abs(i-1.5) + 3 - Math.abs(j - 1.5)) * 0.2 + 0.1],
                    partialCylinder()))))    
      }
  } 
   
  
   
  return union(
    shapes
  )
}



function partialCylinder() {
    return difference(
        cylinder({ r: 4, h: 10, fn: 45}),
        cylinder({ r: 3, h: 10, fn: 45 }),
        translate([0,0,4], cube({ size: [4,4,6]})),
        translate([-4,0,7], cube({ size: [4,4,3]})),
        translate([0,-4,7], cube({ size: [4,4,3]}))
    )
}
