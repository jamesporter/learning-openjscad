
function main () {
  return union(
    hex(5, 0,0),
    hex(4, 1,0),
    hex(3, 0,1),
    hex(2, 1,1)
  )
}

var pit = Math.PI/3;
var dv = Math.sin(pit);
var dh = 1;

function hex(h,x,y) {
    var dx,dy;
    if(x % 2 == 0) {
        dx = x * 2 * dh;
        dy = y * 2 * dv;
    } else {
        dx = x * 2 * dh - 0.5 * dh;
        dy = y * dv * 2 + dv;
    }
    return translate([dx, dy, 0],
        linear_extrude({height: h},
            polygon([
                [1,0],
                [Math.cos(pit),Math.sin(pit)],
                [-Math.cos(pit),Math.sin(pit)],
                [-1,0],
                [-Math.cos(pit),-Math.sin(pit)],
                [Math.cos(pit),-Math.sin(pit)],
            ])
        )
    )
}
