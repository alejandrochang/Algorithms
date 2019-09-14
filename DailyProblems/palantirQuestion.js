// This problem was asked by Palantir.
// In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:
// A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.
// For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.
// Given a list of paper citations of a researcher, calculate their h-index.

function hIndex(arr) {

}

// n = 5, # of papers
// each paper w/ citations is the arr [4, 3, 0, 1, 5]
// The h-index for above would be 3, since the researcher has 3 papers w/ at least 3 citations

const array = [4, 3, 0, 1, 5];
console.log(hIndex(array));

// I: arr
// O: Integer


// 5 number of papers, 3/5 papers have at least 3 citations, 4/5 papers have 1 citation, 
