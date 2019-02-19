function main () {
    return difference(
        rotate([90,0,0], linear_extrude({ height: 5}, polygon(
            [
                [0,0],
                [5,0],
                [4.6666667, 2],
                [4.3333333, 2],
                [4, 1],
                [3, 1],
                [0,5]
            ]    
        ))),
        
        translate([0,-2.5,2.5], cube({ size: [4,3,5], center: true})),
        translate([6,-2.5,2.5], cube({ size: [4,3,5], center: true}))
    );   
 
}
