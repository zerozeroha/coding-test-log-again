function solution(dot) {
    
    let result = [dot[0],dot[1]]
    
    for ( let i=0; i<dot.length; i++){
        if(0<=dot[0] && 0<=dot[1]){return 1}
        if(dot[0]<=0 && 0<=dot[1]){return 2}
        if(dot[0]<=0 && dot[1]<=0){return 3}
        if(0<=dot[0] && dot[1]<=0){return 4}
    }
}