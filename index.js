prompt ("What is your name?");
var loveScore = math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100
if (loveScore > 70) {
    alert("Your love score is " + lovescore + "%" + "you love each other like Jack loves Jill.");

}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + "you got together like oil and water.");
}