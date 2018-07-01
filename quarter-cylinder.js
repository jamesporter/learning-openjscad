function partCylinder(iR, oR, h) {
    return difference(
        [
            cylinder({r: oR, h: h}),
            cylinder({r: iR, h: h}),
            translate([0, 0, 0], cube({ size: [oR, oR, h]})),
            translate([-oR, 0, 0], cube({ size: [oR, oR, h]})),
            translate([0, -oR, 0], cube({ size: [oR, oR, h]})),
        ]
    );
}




function main () {
  var shapes = [];
  
  shapes.push(partCylinder(5,6,10))
  
  return union(
    shapes  
  )
}
