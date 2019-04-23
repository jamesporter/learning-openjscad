function main () {
    return union(
        wall(5,4),
        translate([1,10,0], rotate([0,0,-90], wall(5,4))),
        translate([0,10,0], wall(5,4))
        )
    
}


function wall(w,h) {
    
    var points = []
    for(var i=0; i < w; i++){
       points.push([2*i,h+1])
       points.push([2*i + 1,h+1]) 
       points.push([2*i + 1,h]) 
       points.push([2*i + 2,h]) 
    }
    points.reverse()
    return rotate([90,0,0], linear_extrude(
        { height: 1 }, 
        polygon(points.concat([
            [0,0], [w*2, 0], [w*2, h]
        ]))
    ))
}
