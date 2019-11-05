
//数组随机排序

//测试一
var numbers = [12,4,16,3];
numbers.sort(function() {
    return .5 - Math.random();
});

//v8在处理sort方法时，使用了插入排序和快排两种方案。当目标数组长度小于10时，使用插入排序；反之，使用快排。
//大多数排序算法的时间复杂度介于O(n)到O(n2)之间，元素之间的比较次数通常情况下要远小于n(n-1)/2，也就意味着有一些元素之间根本就没机会相比较（也就没有了随机交换的可能），这些 sort 随机排序的算法自然也不能真正随机。


//洗牌算法Fisher–Yates shuffle

Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
tempArray.shuffle();
console.log(tempArray);  


/*首先我们有一个已经排好序的数组
从数组末尾开始，选取最后一个元素。
在数组一共9个位置中，随机产生一个位置，该位置元素与最后一个元素进行交换。
上一步中，我们已经把数组末尾元素进行随机置换。
接下来，对数组倒数第二个元素动手。在除去已经排好的最后一个元素位置以外的8个位置中，随机产生一个位置，该位置元素与倒数第二个元素进行交换。
理解了前两部，接下来就是依次进行，如此简单。
*/

