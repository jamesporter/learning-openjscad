function main() {
  let a = [];
  let offset;
  
  offset = 0;
  for(let i=5; i>0; i--){
      a.push(
          rotate([0,-0,0],
            translate([0,0,offset],
                scale([1,1,1/i], cube({size: i}))
                )
            )
        )
                
      offset += 1;
  }
  
  offset = 0;
  for(let i=5; i>0; i--){
      a.push(
          translate([0,6,5],
          rotate([0,90,-90],
            translate([0,0,offset],
                scale([1,1,1/i], cube({size: i}))
                )
            ))
        )
                
      offset += 1;
  }
  
    offset = 0;
  for(let i=5; i>0; i--){
      a.push(
          translate([0, 6, 5],
          rotate([90,0,0],
            translate([0,0,offset],
                scale([1,1,1/i], cube({size: i}))
                )
            ))
        )
                
      offset += 1;
  }
  

  
  

  return union.apply(null, a);
}
