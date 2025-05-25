const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ["title", "participants"]));

console.log(
  JSON.stringify(
    meetup,
    function (key, value) {
      if (key != "" && value == meetup)
        return undefined; // skip references to current object
      else if (typeof value == "function") return value.toString(); // stringify functions
      return value; // otherwise return original value unchanged
    },
    2
  )
); // use 2 spaces for nicer formatting

console.log(JSON.stringify(meetup));
