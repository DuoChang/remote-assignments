function twoSum(nums, target){
	var answer=[];
	for(let i=0; i<nums.length ; i+=1){
		if(target-nums[i] > 0){
			answer[0]=i;
			for(let j=0; j<nums.length; j+=1){
				if(target-nums[i]-nums[j]===0){
					answer[1]=j;
					break;
				}
			}				
		}
	}
	return answer;
}

document.write(twoSum([2,7,11,15],9));