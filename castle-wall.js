function main () {
    return wall(5,4)
}


function wall(w,h) {
    
    var points = []
    for(var i=0; i < w; i++){
       points.push([2*i,h+1])
       points.push([2*i + 1,h+1]) 
       points.push([2*i + 1,h]) 
       points.push([2*i + 2,h]) 
    }
    points.reverse()
    return linear_extrude(
        { height: 1 }, 
        polygon(points.concat([
            [0,0], [w*2, 0], [w*2, h]
        ]))
    )
}
