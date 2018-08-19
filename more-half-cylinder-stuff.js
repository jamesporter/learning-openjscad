function main () {
  var shapes = [];
   
  for(var i=0; i < 6; i++) {
    shapes.push(
        rotate([0,0,i*45],
            halfHollowCylinder(4+i, 3.5+i, 6.5 - i)    
            )
    )    
    
    if(i < 5)
    shapes.push(
        rotate([0,0,(i + 0.5)*45],
            partialHollowCylinder(4.6+i, 3.9+i, 1)    
            )
    )    
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

function hollowCylinder(r, ir, h) {
    return difference(
        cylinder( { r: r, h: h, fn: 45} ),
        cylinder( { r: ir, h: h, fn: 45 } )
    )
}

function halfHollowCylinder(r, ir, h) {
    return difference(
        cylinder( { r: r, h: h, fn: 45} ),
        cylinder( { r: ir, h: h, fn: 45 } ),
        translate([-r,0,0], cube({size: [r*2,r,h]}))
    )
}

function partialHollowCylinder(r, ir, h) {
    return difference(
        cylinder( { r: r, h: h, fn: 45} ),
        cylinder( { r: ir, h: h, fn: 45 } ),
        translate([-r,0,0], cube({size: [r*2,r,h]})),
        translate([0.5*r,-r,0], cube({size: [r/2,r,h]})),
        translate([-r,-r,0], cube({size: [r/2,r,h]}))
    )
}
