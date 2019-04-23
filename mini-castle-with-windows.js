function main () {
    return difference(
        union(
        wall(5,4),
        translate([1,10,0], rotate([0,0,-90], wall(5,4))),
        translate([0,10,0], wall(10,4)),
        translate([20, 9,0], rotate([0,0,-90], wall(5,4))),
        translate([10,0,0], wall(5,9)),
        translate([10,-11,0], rotate([0,0,90], wall(5,9))),
        translate([21,-11,0], rotate([0,0,180], wall(5,9))),
        translate([21,0,0], rotate([0,0,-90], wall(5,9))),
        translate([10,-11,0], cube({ size: [10,10,2] })),
        translate([0,-1,0], cube({ size: [20,10,1] }))
        ),
        translate([14,-3,0], cube({ size: [2,20,3] })),
        translate([14,-3,5], cube({ size: [0.8,4,1.2] })),
        translate([16,-3,6], cube({ size: [0.8,4,1.2] }))
        );
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
