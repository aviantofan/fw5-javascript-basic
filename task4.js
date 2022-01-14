const nama = ["Tofan Avianto"]
const email = ["aviantofan@gmail.com"]
const hobby = ["badminton"]

let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt.56",
        city : "Gwenborough",
        zipcode : "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
}

console.log({
    ...data,
    name : "Tofan Avianto",
    email : "aviantofan@gmail.com",
    hobby : "Badminton"
})

const{street, city} = data.address

console.log(street)
console.log(city)