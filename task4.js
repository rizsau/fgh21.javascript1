let data = {
    id: 1,
    name: "Leanne Graham", 
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
//a
const newData = {...data, name: "Rizka", email: "zahrinarizka@gmmail.com", hobby: "sleep"}
console.log(newData)

//b
const {address} = data
const {street, city} = address
console.log(street + ", " + city)