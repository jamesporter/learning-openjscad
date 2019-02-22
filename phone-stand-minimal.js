function main () {
    return union(difference(
        rotate([90,0,0], linear_extrude({ height: 5}, polygon(
            [
                [0,0],
                [5,0],
                [4.6666667, 1.6],
                [4.3333333, 1.6],
                [4, 0.5],
                [3, 0.5],
                [0,5]
            ]    
        ))),
        
        translate([1,-2.5,2.5], cube({ size: [4.5,4,5], center: true})),
        translate([6,-2.5,2.5], cube({ size: [4.5,4,5], center: true}))
    ),
    translate([1.25,-5,0], cube({ size: [0.5,5,0.5]}))
    );   
 
}
