/*Array are collection of items that are related and can be stored together in
the same container variable.*/
let guestList = ["Destiny", "Rhema", "Liberty", "Ring", "Lara"];
let guestName = Prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert ("Welcome!");
} else {
    alert("sorry, maybe next time.");
}