//keyring... in progress... centred/nice hollow eq triangle

function main () {
  return difference(
    c_triangle(10,1),
    c_triangle(8,1)
  )
}

function c_triangle(s, h) {
    var dx = s/2;
    var hy = s * Math.sqrt(3)/2;
    var dyU = -s/Math.sqrt(3);
    var dyD = hy -s/Math.sqrt(3);
    
    return linear_extrude({ height: h},
        polygon([[-dx, dyD],[dx, dyD],[0, dyU]])
    );
}
