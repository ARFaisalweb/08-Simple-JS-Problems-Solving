// 01. Kilometer To Meter Converter Function.
const kilometerToMeter = (km) => {
  let meter = 0;
  if (km < 0) {
    return "Distance value should be positive. Pls, put a valid number";
  } else {
    meter = km * 1000;
  }
  return meter;
};
const meterResult = kilometerToMeter(3.9);
console.log("Meter : ", meterResult);

// 02. Budget Calculator Function.
const budgetCalculator = (watch, phone, laptop) => {
  if ((watch < 0, phone < 0, laptop < 0)) {
    return "Pls, give a valid number";
  } else {
    const totalCost = watch * 50 + phone * 100 + laptop * 500;
    return totalCost;
  }
};
const totalCost = budgetCalculator(6, 3, 3);
console.log("Total budget:", totalCost);

// 03. Hotel Cost Calculator Function.
const hotelCost = (days) => {
  let totalCost = 0;
  if (days < 0) {
    return "Pls, put a valid number.";
  } else if (days <= 10) {
    totalCost = days * 100;
  } else if (days <= 20) {
    const firstTenDays = 10 * 100;
    const remainingDays = days - 10;
    const remainingDaysCost = remainingDays * 80;
    totalCost = firstTenDays + remainingDaysCost;
  } else {
    const firstTenDays = 10 * 100;
    const secondTenDays = 10 * 80;
    const remainingDays = days - 20;
    const remainingDaysCost = remainingDays * 50;
    totalCost = firstTenDays + secondTenDays + remainingDaysCost;
  }
  return totalCost;
};
const totalRentCost = hotelCost(17);
console.log("Total hotel rent cost:", totalRentCost);

// 04. Mega Friend Function.
const friends = [
  "Saif",
  "Tahsin",
  "Abdullah",
  "Kawser",
  "Mansoor",
  "Mahmudullah",
  "Nazrul",
];
const megaFriend = (array) => {
  if (array.length == 0) {
    return "You should insert a value.";
  } else {
    let longest = "";
    let longestName = "";
    for (let i = 0; i < array.length; i++) {
      const element = array[i].length;
      if (element > longest) {
        longest = element;
        longestName = array[i];
      }
    }
    return longestName;
  }
};
const result = megaFriend(friends);
console.log("Longest friend name:", result);
