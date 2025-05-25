let trainerInfo = {

    "Trainer": "Mirza",
    "Company": "IOD",
    "Country": "New Zealand",

}

console.log(trainerInfo.Trainer)
console.log(trainerInfo.Company)
console.log(trainerInfo.Country)

trainerInfo.location = "Pacific" //adding a new key/property to a JSON object

trainerInfo.Country = "Australia"

console.log(trainerInfo)

let trainerInfo2 = {
    "Trainer": "Glen",
    "Company": "IOD",
    "Country": "New Zealand",

}

let trainers = [trainerInfo, trainerInfo2]

console.log(trainers)