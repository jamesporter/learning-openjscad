function main () {
  return union(
    c_triangle(10,0.5)
  )
}

function c_triangle(s, h) {
    var dx = s/2;
    var dy = s * Math.sqrt(3)/2
    
    return linear_extrude({ height: h},
        polygon([[-dx, 0],[dx, 0],[0, dy]])
    )
}
