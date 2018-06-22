function main() {
    return union(form(),
    translate(
        [-7,0,0],
        rotate([0,0,180], form()))    
    )
    
}


function form() {
    var shapes = [];
    var n = 7;
    for(let i=2; i<n; i++){
      shapes.push(
          rotate([0,0,45*i],
            halfTube(i, 5 - i/1.4)
          ));    
    }
    return union(shapes);
}


function halfTube(i, h) {
    return difference(
        cylinder({ r: i, h: h, fn: 50 }),
        cylinder({ r: i-1, h: h, fn: 50 }),
        translate([0,-i,0], cube({
            size: [2*i,2*i,2*i]
        }))
    )
}
