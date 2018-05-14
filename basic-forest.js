
function tree(x,y) {
    var shapes = [];
    var size = Math.random() + 0.4;
    var branches = Math.floor(Math.random() * 4) + 2;
    
    for(var i = 0; i< branches; i++) {
        var branchSize = (branches - i)/2;
        shapes.push(
          translate([-branchSize/2,-branchSize/2,i], 
            scale([1,1,1/branchSize], cube({size: branchSize}))
          )
        );    
    }
    return translate([x,y,1], union(shapes));
};


function main() {
   var shapes = [];
   
   shapes.push(scale([1,1,0.05], cube({size: 20})))
   
   for(var i=2; i <19; i += 2) {
       for(var j=2; j <19; j += 2) {
            shapes.push(tree(i,j));
       }
   }
   return union(shapes);
}
