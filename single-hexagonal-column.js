
function main () {
  return hex(5)
}

var pit = Math.PI/3;

function hex(h) {
    return linear_extrude({height: h},
        polygon([
            [1,0],
            [Math.cos(pit),Math.sin(pit)],
            [-Math.cos(pit),Math.sin(pit)],
            [-1,0],
            [-Math.cos(pit),-Math.sin(pit)],
            [Math.cos(pit),-Math.sin(pit)],
        ])
    )
}
