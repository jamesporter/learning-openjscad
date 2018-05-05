function main() {
  let a = [];
  let offset = 0;
  
//   for(let i=5; i>0; i--){
//       a.push(
//           translate( [0,0,offset],
//             scale([1,1,1/i],
//                 cube({size: i})
//                 )
//             )
//         )
            
//       offset += 1;
//   }
  
  offset = 0;
  for(let i=5; i>0; i--){
      a.push(
          rotate([0,-90,90],
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
          rotate([0,-90,-180],
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
          rotate([0,-90,0],
            translate([0,0,offset],
                scale([1,1,1/i], cube({size: i}))
                )
            )
        )
                
      offset += 1;
  }
  
  for(let i=5; i>0; i--){
      a.push(
          translate([0,-5,0],
          rotate([0,-90,-90],
            translate([0,0,offset],
                scale([1,1,1/i], cube({size: i}))
                )
            ))
        )
                
      offset += 1;
  }
  
  return union.apply(null, a);
}
