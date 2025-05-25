const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-06-01",
};

const meetupString = JSON.stringify(meetup); // convert object to string

console.log(meetupString);

const meetupParsed = JSON.parse(meetupString);
console.log(meetupParsed); // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }
