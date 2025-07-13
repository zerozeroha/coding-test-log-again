function solution(sides) {
    
    let mostLongSide = Math.max(...sides)
    let otherSides = sides.reduce((acc,cur)=>acc+cur,0) - mostLongSide
    
    if( mostLongSide < otherSides ){
        return 1
    }else{
        return 2
    }
    
}