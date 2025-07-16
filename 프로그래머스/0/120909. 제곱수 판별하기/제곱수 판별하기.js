function solution(n) {
    
    // Number.isInteger(x): x가 정수이면 true를 반환
    // Math.sqrt: 전달한 숫자의 제곱근을 반환하는 함수
 
   if(Number.isInteger(Math.sqrt(n))){
       return 1
   }else{
       return 2
   }
}