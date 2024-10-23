/**
const duplicateInteger = function(nums) {

    const set = new Set();


    for(let n of nums) {
        if(set.has(n)) return true;

        set.add(n)
    }


    return false
};
**/
export const solutionTemplate = `const duplicateInteger = function(nums) {
    
    $CODE_BLOCK$

    
    $CODE_BLOCK$

    
    $CODE_BLOCK$
    
};`;

export const solutionBlocks = [
  `const set = new Set();`,
  `for(let n of nums) {
          if(set.has(n)) return true;
    
          set.add(n)
    }`,
  `return false`,
];
