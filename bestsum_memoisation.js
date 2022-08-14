const bestSum = (targetSum,numbers,memo={})=>{
    if (targetSum in memo) return memo[targetSum];
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    let shortestCombination = null;
    for(let num of numbers){
        const remainder = targetSum - num;
        const Combination = bestSum(remainder,numbers,memo);
        if(Combination !==null){
            const combo = [...Combination,num];
            if(shortestCombination===null||combo.length<shortestCombination.length){
                shortestCombination = combo;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(7,[2,3]));
console.log(bestSum(300,[7,14]));