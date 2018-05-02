function main() {
    var n = 20;
    var shapes = [];
    for(var i=0; i<n ; i++) {
        for(var j=0; j<n; j++){
            var v = i/4 + 2* sin(20*j) + cos(40 * i + i*i + i*j);
            v += 1 - j/25;
            v += j/20;
            v = Math.max(v, 1);
            
            shapes.push(
                scale([1,1,v], cube( {size: 1} ).translate( [j,i,0] ))    
            )
        }
    }
    
   return union(shapes)
}
