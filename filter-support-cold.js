function main () {
  return translate([0,0,-1], union(
     inner(),
     support(3.5),
     support(-3.5),
     stab(3.5, 1),
     stab(3.5, -1),
     stab(-3.5, 1),
     stab(-3.5, -1),
     text()
  )
  )
}


function inner() {
    return difference(
        cylinder({center: true, r:3.5, h: 1, fn: 100}),
        cylinder({center: true, r: 3, h: 1, fn: 100})
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

function text() {
    var l = vector_text(0,0,"Cold");   // l contains a list of polylines to be drawn
    var o = [];
    l.forEach(function(pl) {                   // pl = polyline (not closed)
        o.push(rectangular_extrude(pl, {w: 4, h: 4}));   // extrude it to 3D
    });
    return translate(
        [-3.7,3.4,0.06],   
        scale(0.11, union(o))
    );
}
