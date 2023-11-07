/* Leap year Exercise:- Is the year 2000 a leap year?
2000 / 4 = 500 (Leap)
2000 / 100 = 20 (Not Leap)
2000 / 400 = 5 (leap!)
yes a leap so the year 2000 is a leap year. */

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "leap year"
        }
    } else {
        return "Not leap year.";
    }
}

//simple exercise using if-else statement to checkout leap year.
