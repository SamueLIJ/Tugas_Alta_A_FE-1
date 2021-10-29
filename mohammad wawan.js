const a =[
    {
        "createdAt": "2021-10-26T00:47:00.414Z",
        "name": "Willie Corkery Jr.",
        "age": 29,
        "avatar": "https://cdn.fakercloud.com/avatars/chrisvanderkooi_128.jpg",
        "address":{
          "city": "Randyland",
          "province": "North Borders",
        },
        "id": "1"
    },
    {
        "createdAt": "2021-10-26T02:37:38.498Z",
        "name": "Homer Adams",
        "age": 62,
        "avatar": "https://cdn.fakercloud.com/avatars/_kkga_128.jpg",
        "address":{
          "city": "South Deshaunburgh",
          "province": "South Borders",
        },
        "id": "2"
    },
    {
        "createdAt": "2021-10-26T09:47:25.715Z",
        "name": "Greg Abernathy",
        "age": 41,
        "avatar": "https://cdn.fakercloud.com/avatars/ryandownie_128.jpg",
        "address":{
          "city": "Micahport",
          "province": "North Borders",
        },
        "id": "3"
    },
    {
        "createdAt": "2021-10-26T08:22:31.342Z",
        "name": "Mrs. Lynn Buckridge",
        "age": 17,
        "avatar": "https://cdn.fakercloud.com/avatars/adrienths_128.jpg",
        "address":{
          "city": "Lake Jakayla",
          "province": "South Borders",
        },
        "id": "4"
    },
    {
        "createdAt": "2021-10-25T22:02:49.085Z",
        "name": "Krystal Batz",
        "age": 33,
        "avatar": "https://cdn.fakercloud.com/avatars/aka_james_128.jpg",
        "address":{
          "city": "Plainfield",
          "province": "South Borders",
        },
        "id": "5"
    },
    {
        "createdAt": "2021-10-25T16:19:16.306Z",
        "name": "Dustin Hagenes IV",
        "age": 27,
        "avatar": "https://cdn.fakercloud.com/avatars/operatino_128.jpg",
        "address":{
          "city": "West Noelville",
          "province": "South Borders",
        },
        "id": "6"
    },
    {
        "createdAt": "2021-10-26T05:29:51.976Z",
        "name": "Norman Gutmann",
        "age": 82,
        "avatar": "https://cdn.fakercloud.com/avatars/imammuht_128.jpg",
        "address":{
          "city": "East Nadia",
          "province": "South Borders",
        },
        "id": "7"
    },
    {
        "createdAt": "2021-10-26T06:48:07.869Z",
        "name": "Pat Sauer",
        "age": 10,
        "avatar": "https://cdn.fakercloud.com/avatars/andyisonline_128.jpg",
        "address":{
          "city": "North Donnell",
          "province": "South Borders",
        },
        "id": "8"
    },
    {
        "createdAt": "2021-10-26T02:31:11.091Z",
        "name": "Otis Paucek",
        "age": 82,
        "avatar": "https://cdn.fakercloud.com/avatars/judzhin_miles_128.jpg",
        "address":{
          "city": "East Nadia",
          "province": "North Borders",
        },
        "id": "9"
    },
    {
        "createdAt": "2021-10-25T22:05:09.710Z",
        "name": "Freddie Sawayn",
        "age": 94,
        "avatar": "https://cdn.fakercloud.com/avatars/peejfancher_128.jpg",
        "address":{
          "city": "Micahport",
          "province": "North Borders",
        },
        "id": "10"
        
    },
  ]

  let no1 = a.reduce((accumulator, currentValue) => {
    currentValue.filter;
    accumulator.push({
        city: currentValue.address.city,
    });
    return accumulator;
}, []);
console.log(no1);

let no2 = a.reduce((accumulator, currentValue) => {
    if (currentValue.age > 50) {
        accumulator.push({
            "name": currentValue.name,
            "age": currentValue.age,
            "id": currentValue.id,
        });
    }
    return accumulator;
}, []);
console.log(no2)

let no3 = []
let i = 0
let sum = 0
while(sum < 3) {
  if(a[i].address.province === "North Borders") {
    no3.push(a[i])
    sum++
  }
  i++
}

console.log(no3)