function solution(my_string) {
   
    return my_string.split("").filter((char)=>!'aeiou'.includes(char)).join("")
    
}