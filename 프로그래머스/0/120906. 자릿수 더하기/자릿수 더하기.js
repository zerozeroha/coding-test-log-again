function solution(n) {
    
    // 정수 n
    // solve : n의 각 자리 숫자의 합
    
    let numbers = String(n).split("").map(i=>+i)
    return numbers.reduce((acc,cur)=>acc+cur,0)
    
}