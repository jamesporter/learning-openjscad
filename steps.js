function main() {
  let a = [];
  let offset = 0;
  
  for(let i=5; i>0; i--){
      a.push(scale([1,1,1/i], cube({size: i})).translate([0,0,offset]))
      offset += 1;
  }
  
  return union.apply(null, a);
}
