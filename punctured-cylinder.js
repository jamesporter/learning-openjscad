function main() {
    var subtract = []
    
    for(var i=1; i<9; i++) {
        for(var a=0; a < 360; a+= 20 ) {
            if(Math.random() < 0.6)
            subtract.push(
                    rotate([0,0,a],
                        translate([4.5,0,i + 0.5],
                            scale(
                                [1.2,0.7,1],
                                cube({center: true})
                            )
                        )
                )
            )      
        }
    }
    
   return difference(
            cylinder({r: 5, h: 10}),
            cylinder({r: 4, h: 10}),
            union(subtract)
        )
}
