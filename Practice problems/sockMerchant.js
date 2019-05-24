/* Sock Merchant
John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

For example, there are 7 socks with colors ar = [1,2,1,2,1,3,2].
There is one pair of color 1 and one of color 2.
There are three odd socks left, one of each color. The number of pairs is 2.
*/

function sockMerchant(n, ar) {
    const count = {};
    for (let i = 0; i < n; i++) {
        let num = ar[i];
        count[num] = count[num] ? count[num] + 1 : 1
    }

    let counter = 0;
    const counts = Object.values(count);
    counts.forEach((x) => {
      counter = counter + Math.floor(x/2);
    })
    return counter;

}

// Should be 2 pairs
console.log(sockMerchant(7, [1,2,1,2,1,3,2]));
// Should be 3 pairs
console.log(sockMerchant(7, [1,2,3,1,1,1,3]));
// Should be 2 pairs
console.log(sockMerchant(4, [8,8,8,8]));
// Should be 2 pairs still
console.log(sockMerchant(5, [8,8,8,8,8]));
