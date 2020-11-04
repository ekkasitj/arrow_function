let scores = [43,64,23,51,56];
let failScore = scores.findIndex((score) => {
    return score <30;

});
console.log(failScore);