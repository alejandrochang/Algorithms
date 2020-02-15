var maxProduct = function(nums) {
    if (nums.length === 1) return nums;
    let temp = { product: nums[0], start: 0 };
    let result = { product: nums[0], start: 0, end: 0 };
    
    for (let i = 1; i < nums.length; i++) {
        temp.product *= nums[i];
        
        if (result.product < temp.product) {
           result = { product: temp.product, start: temp.start, end: i };    
        }
        
    }
    
    return result.product;
};