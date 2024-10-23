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
    
    $BLOCK$

    
    $BLOCK$

    
    $BLOCK$
    
};`;

export const solutionBlocks = [
  `const set = new Set();`,
  `for(let n of nums) {
          if(set.has(n)) return true;
    
          set.add(n)
    }`,
  `return false`,
];
