const moment = require("moment");
// import { moment } from "moment";

// new Date().getTime();
const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234;
const date = moment(createdAt);
// date.add(100, "year").subtract(9, 'month');
console.log(date.format("h:mm a"));
