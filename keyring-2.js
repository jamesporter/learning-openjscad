//keyring..

// lots of manual tweaking!

function main () {
  var shapes = [];
  
  shapes.push(hollow_triangle(10,1))
  shapes.push(translate([7.5,1.44,0], hollow_triangle(5,1)));
  shapes.push(translate([5,0,0], rotate([0,0,180], hollow_triangle(5,1))));
  shapes.push(translate([5,-2.88,0], hollow_triangle(5,1)));
  shapes.push(translate([2.5,-4.3,0], rotate([0,0,180], hollow_triangle(5,1))));
  
  shapes.push(translate([4.9 + 7.5,1.44,0], hollow_triangle(5,1.1)));
  shapes.push(translate([4.9 + 5,0,0], rotate([0,0,180], hollow_triangle(5,1.1))));
  shapes.push(translate([4.9 + 5,-2.88,0], hollow_triangle(5,1.1)));
  shapes.push(translate([4.9 + 2.5,-4.3,0], rotate([0,0,180], hollow_triangle(5,1.1))));
  
  shapes.push(translate([7.2 + 7.5,1.44,0], hollow_triangle(5,1.2)));
  shapes.push(translate([6.8 + 5,0,0], rotate([0,0,180], hollow_triangle(5,1.2))));
  shapes.push(translate([7.2 + 5,-2.88,0], hollow_triangle(5,1.2)));
  shapes.push(translate([6.8 + 2.5,-4.3,0], rotate([0,0,180], hollow_triangle(5,1.2))));
  
  shapes.push(translate([10 + 7.5,1.44,0], hollow_triangle(5,0.9)));
  shapes.push(translate([12 + 5,0,0], rotate([0,0,180], hollow_triangle(5,0.9))));
  shapes.push(translate([11 + 5,-2.88,0], hollow_triangle(5,1)));
  shapes.push(translate([13 + 2.5,-4.3,0], rotate([0,0,180], hollow_triangle(5,1.1))));
          
          
  return union(shapes)
}

function hollow_triangle(s,h) {
   return  difference(
    c_triangle(s,h),
    c_triangle(s*0.7,h)
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
