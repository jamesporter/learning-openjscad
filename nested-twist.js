function partCylinder(iR, oR, h) {
    return difference(
        [
            cylinder({r: oR, h: h}),
            cylinder({r: iR, h: h}),
            translate([0, 0, 0], cube({ size: [oR, oR, h]})),
            translate([-oR, 0, 0], cube({ size: [oR, oR, h]})),
            translate([0, -oR, 0], cube({ size: [oR, oR, h]})),
            translate(
                [-oR, -oR, h/2],
                rotate([30,0,0],
                    cube({size: [oR*2, oR*2, h]})
                )    
            )
            
        ]
    );
}




function main () {
  var shapes = [];
  
  for(var i=0; i < 16; i++){
    shapes.push(
        rotate([0,0,i*22.5],
            translate([0,-4,0],
                partCylinder(5,6,10)
            )
        ))    
  }
  
  for(var i=0; i < 16; i++){
    shapes.push(
        rotate([0,0,11.25 + i*22.5],
            translate([0,-1.5,0],
                scale([1,1,1.5],
                partCylinder(5,6,10)
                )
            )
        ))    
  }
  
  
  return translate( [0,0,-3],
    difference(
        union(
        shapes  
        ),
        cube({size: [20,20,6], center: true })
    )    
  )
  
  
}
