function solution(array) {
   
    array.sort((a,b)=>b-a)
    return array[Math.floor(array.length/2)]
    
}