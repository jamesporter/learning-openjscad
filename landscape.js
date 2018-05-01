function main() {
    var n = 15;
    var shapes = [];
    for(var i=0; i<n ; i++) {
        for(var j=0; j<n; j++){
            var v = Math.max(i/4 + 2* sin(20*j) + cos(25 * i), 1);
            shapes.push(
                scale([1,1,v], cube( {size: 1} ).translate( [j,i,0] ))    
            )
        }
    }
    
   return union(shapes)
}
