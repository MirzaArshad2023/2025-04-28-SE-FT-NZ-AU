let today = new Date();

console.log(today);
console.log(+today);

const epoch = new Date(0);

console.log(epoch);

const jan2_1970 = new Date(1000 * 60 * 60 * 24 * 10);
console.log(jan2_1970);

const christmas = new Date("2023-12-25 14:30:30"); // assumes UTC timezone if time not included

console.log(christmas);

const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const boxingDay = new Date(2023, 11, 26); // month 11 is December, assumes local timezone
console.log(boxingDay); // 2023-12-25T14:00:00.000Z - so hours are different in UTC

console.log(boxingDay.getFullYear());
console.log(boxingDay.getDate());

const christmas1 = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas1.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));

const nyeLocal1 = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
console.log(nyeLocal1.toLocaleString());
