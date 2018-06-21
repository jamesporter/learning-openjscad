function main () {
  return union(
   [
       waves(),
       translate([2.1,4.7,0], rotate([0,0,-45], waves())),
   ]   
  )
}


function waves() {
    return rotate([90,0,0],
      linear_extrude( { height: 0.5},
    polygon({ points: [[0,0], [2,1.5], [2,0.5], [4,2], [4,1], [6,2.5], [6,0]]})    
  )
    )  
}
