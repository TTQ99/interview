/**
 * 四. 有一个游戏，需要从一组头尾相连，无序排列的刻着正整数数字的弹珠中抽取你想要的数字，这组弹珠的数量为K，这个游戏有以下条件：相邻两个弹珠只能拿取一个；

	计算在此条件下能拿出的弹珠的最大和

示例：

	输入：nums = [2,3,2]
	输出：3
 */
let nums = [2, 3, 2]

let rob = function (nums) {
  let dp = new Array(nums.length)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2, len = nums.length; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] - nums[i], dp[i - 2]) + nums[i]
    dp[i] = Math.max(dp[i], dp[i - 1])
  }
  return dp[nums.length - 1]
}

console.log(rob(nums))
