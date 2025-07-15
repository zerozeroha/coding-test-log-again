function solution(my_string, n) {
    
    // str.repeat(n): str(문자열)을 n번 반복한 새로운 문자열을 반환
    
    return my_string.split("").map(str => str.repeat(n)).join("")
}