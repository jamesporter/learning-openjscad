function main() {
    var shapes = [];
    var dv = 3;
    var lh = 3;
    
    for(var r=4; r > 2; r-= 0.5) {
        shapes.push(level(r, lh, dv));
        dv += lh - 0.5;
    }
    
    return union(shapes);
}

function level(radius, height, dv) {
   var base = difference(
    cylinder( {h: height, r:radius, center: true, fn: 100} ),
    cylinder( {h: height, r: radius - 0.5, center: true, fn: 100} )
    );
    
    var windows = [base];
    
    for(var j=0; j < 3; j++) {
        for(var i=0; i < 360; i+= 20) {
            if(Math.random() > 0.2)
                windows.push(
                    translate([(radius - 0.5) * cos(i), 
                                (radius - 0.5) * sin(i), 
                                0.25 - height/4 + j * height/6], 
                        rotate([0,0,i],
                            scale([1,radius/5,height/6],
                                cube({ center: true })
                            )
                        )
                    )
                )
        }
    }
    
    
    return translate([0,0,dv - height/2], difference(windows));
}
