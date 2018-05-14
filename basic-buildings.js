
function building(x,y,h) {
    return translate([x - 0.5,y -0.5,1], 
        scale([2 * 1/h, 2 * 1/h,1 + Math.random()], 
            cube({size: h })
        )
    );
};


function main() {
   var shapes = [];
   
   shapes.push(scale([1,1,0.05], cube({size: 20})))
   
   for(var i=2; i <19; i += 3) {
       for(var j=2; j <19; j += 3) {
           if(Math.random() > 0.4){
              shapes.push(building(i,j, 4));
           }
       }
   }
   return union(shapes);
}
