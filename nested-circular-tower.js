function main() {
    var shapes = [];
    var dv = 0;
    var lh = 4;
    
    for(var r=5; r > 3; r-= 0.5) {
        shapes.push(level(r, lh, dv));
        dv += lh - 0.5;
    }
    
    return union(shapes);
}

function level(radius, height, dv) {
   var base = difference(
    cylinder( {h: height, r:radius, center: true} ),
    cylinder( {h: height, r: radius - 0.5, center: true} )
    );
    
    return translate([0,0,dv - height/2], base);
}
