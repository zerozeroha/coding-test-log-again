function solution(price) {
    
// 할인 조건은 큰 금액부터 순서대로 비교해야 제대로 적용됨
    
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }else if(price >= 300000){
        return Math.floor(price * 0.9)
    }else if(price >= 100000){
        return Math.floor(price * 0.95)
    }else{
        return price
    }
        
}
