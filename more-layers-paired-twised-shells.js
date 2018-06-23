function main() {
    return union(form(),
        translate( [6,20.1,0],
            rotate([0,0,180], form())
        )
    )
    
}


function form() {
    var shapes = [];
    var n = 12;
    for(let i=2; i<=n; i++){
      shapes.push(
          rotate([0,0,15*i],
            halfTube(i, 13 - i)
          ));    
    }
    return union(shapes);
}


function halfTube(i, h) {
    return difference(
        cylinder({ r: i, h: h, fn: 50 }),
        cylinder({ r: i-1, h: h, fn: 50 }),
        translate([0,-i,0], cube({
            size: [2*i,2*i,20*i]
        }))
    )
}
