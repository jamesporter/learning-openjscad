function main () {
  return translate([0,0,-1], union(
     inner(),
     support(3.5),
     support(-3.5),
     stab(3.5, 1),
     stab(3.5, -1),
     stab(-3.5, 1),
     stab(-3.5, -1)
  )
  )
}


function inner() {
    return difference(
        cube({center: true, size: [7,7,1]}),
        cube({center: true, size: [6,6,1]})
    );
}

function support(cx) {
    return translate([cx, 0, 0],
       cube({ center: true, size: [0.5,12,1] })    
    )
}

function stab(cx, sgn) {
    return translate([cx, sgn * 4.25, -1], 
      cube({center: true, size: [0.5,1,1]})
      )
}
