function solution(array, height) {
    
    // array : 반 친구들의 키가 담긴 정수 배열
    // height : 머쓱이의 키
    // solve - 머쓱이보다 키큰 사람의 수
    
    let sum = 0;
     
    for(let i=0; i<array.length; i++){
        if(array[i]>height){
           sum = sum+1
        }
    } return sum
}