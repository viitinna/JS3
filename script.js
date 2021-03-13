
//let user = {
//name: "Alla";
//age: 25;
//status: "free"
//};

//let cat = {
//nik: "pushok";
//color: "gray";
//breed: "siamese"
//};

//let drink = {
//juice: "orahge";
//milk: "white";
//coffee: "black"
//};

//let sweet = {
//chokolate: "mars";
//icecream: "berry";
//cake: "napoleon"
//};

//let book = {
//historical: "rome";
//poems: "best";
//detectives: "megre"
//};


let book = {historical: "rome", poems: ["best","sky"], detectives: {story: "megre"}};

//let cat = {nik: "pushok", color: ["gray", "black"], breed: {name: "siamese"}};

//console.log(book);
//for(key in book) {
	//console.log("key",key);
//}

//console.log(cat);
//for(key in cat) {
	//console.log("key",key);
//}


//console.log(Object.keys(book));

//console.log(Object.keys(cat));


//let users = [{historical: "rome", poems: ["best","sky"], detectives: {story: "megre"}}, {nik: "pushok", color: ["gray", "black"], breed: {name: "siamese"}}];


//let i = 0;
//while(i<users.length){
	//const user1 = users[i]
	//cocsole.log(user1)
	//i++;
//};

//for (let i = 0; i < users.length; i++){
    //const user = users[i]
    //console.log(user)
//};


//for (const user of users) {
	//console.log(user)
//};


const myJson = JSON.stringify(book);
console.log("myJson");
console.log(myJson);
const m = JSON.parse(myJson);
console.log("myJson m");
console.log(m);
