/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sortedStr = str.split('').sort().join('');
        if (!map[sortedStr]) {
            map[sortedStr] = [str];
        } else {
            map[sortedStr] = [...map[sortedStr], str];
        }
    }

    return Object.values(map);
};