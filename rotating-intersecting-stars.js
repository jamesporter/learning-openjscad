function main () {
    var shapes = []
    
    for(var j=4; j>1; j--){
        shapes.push(
            rotate([0,0,j * 10],
            hollowStar(j,j /2.5,0.8,(5 - j)/3,7)))
    }
   return union(shapes)
}

function star(r,ir, h,  sides) {
    var points = [];
    var delta = Math.PI / sides;
    for(var i=0; i<sides; i++) {
        // outer, then inner
        points.push([
            r * Math.cos(2*i*delta),
            r * Math.sin(2*i*delta)
        ])
        points.push([
            ir * Math.cos((2*i + 1)*delta),
            ir * Math.sin((2*i + 1)*delta)
        ])
    }
    
    console.log(points)
    
    return linear_extrude({height: h},
            polygon(points)
        )
}

function hollowStar(r,ir, w, h,  sides) {
    var points = [];
    var delta = Math.PI / sides;
    for(var i=0; i<sides; i++) {
        // outer, then inner
        points.push([
            r * Math.cos(2*i*delta),
            r * Math.sin(2*i*delta)
        ])
        points.push([
            ir * Math.cos((2*i + 1)*delta),
            ir * Math.sin((2*i + 1)*delta)
        ])
    }
    
    var ipoints = [];
    for(i=0; i<sides; i++) {
        // outer, then inner
        ipoints.push([
            (r *w) * Math.cos(2*i*delta),
            (r *w) * Math.sin(2*i*delta)
        ])
        ipoints.push([
            (ir *w) * Math.cos((2*i + 1)*delta),
            (ir *w) * Math.sin((2*i + 1)*delta)
        ])
    }
    
    return difference(
        linear_extrude({height: h},
            polygon(points)
        ),
        linear_extrude({height: h},
            polygon(ipoints)
        )
    )
}



