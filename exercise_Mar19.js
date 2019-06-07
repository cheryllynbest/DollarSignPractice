
// _______________March 18th - Part 1 - Exercises______________________

/*    
    Write the function that will create this output:
*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

function assertEquals(x, y) {
		if (x !== y){
		console.log(`	*** the two values are not the same:
		p1-->${x}
		p2-->${y}`);
		return false;
	}
		console.log("You are correct")
		return true;
}

// assertEquals("a","b"); //not the same
// assertEquals("a","a"); //the same
// assertEquals(1,2);      //not the same
// assertEquals(2,2);		// the same
// assertEquals("2",2);	// not the same
// assertEquals("This value","This value"); //the same

function makeEmailArr(a) {
	const newEmail = `${a[0]}.${a[1]}`
	// console.log(`Your email is: ${a[0]}.${a[1]}@evolveu.ca`)
	return newEmail;
}

const arrayLarry = ['larry', 'shumlich'];
// assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
// assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
// assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

const data = {
    staff: [
        {fname:"Jane", lname:"Smith", balance:10},
        {fname:"Liam", lname:"Henry", balance:1000},
        {fname:"Emma", lname:"Jones", balance:1330},
        {fname:"Olivia", lname:"Notly", balance:310},
        {fname:"Noah", lname:"Ho", balance:503},
        {fname:"William", lname:"Lee", balance:520},
        {fname:"Benjamin", lname:"Amis", balance:150},
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

const makeEmailObj = (obj) => {
    return `${obj.fname}.${obj.lname}@evolveu.ca`;
}

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

function loopStaff(a) {
	let b = [];
	let i = 0;
	for (i=0; i<a.length; i++) {
		// console.log(makeEmailObj(a[i]));
		b.push(makeEmailObj(a[i]));
	}
	return b;
}

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);

// console.log(staffEmail[0]);

assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

// _______________March 18th - Part 2 - Exercises______________________

const people = [
	  {name:"Jane", age:30},
	  {name:"Liam", age:40},
	  {name:"Emma", age:30},
	  {name:"Olivia", age:0},
	  {name:"Noah", age:0},
];

function totalAge(a){
	let total = 0;
	for (i=0; i<a.length; i++){
		total += (a[i].age);
	}
	return total;
}	

function averageAge(a){
	const average = totalAge(a) / a.length;
	return average;
}

// console.log("Total age:", totalAge(people));
// console.log("Average age:", averageAge(people));

assertEquals(totalAge(people),100);
assertEquals(averageAge(people),20);

// _______________March 19th Noon Exercises______________________

function loopWithForOf(array1) {
	let array2 = [];
	for (const a of array1) {
	array2.push(makeEmailObj(a));
	}
	return array2;
}

function loopWithForIn(array1) {
	// console.log("In the For In Loop");
	array2 = [];
	for (const key in array1) {
		array2.push(makeEmailObj(array1[key]));
	}	
	return array2;
}

// console.log('-----emailForOf')
// const emailForOf = loopWithForOf(data.staff);

// console.log(emailForOf);
// assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

// console.log('-----emailForIn')
// const emailForIn = loopWithForIn(data.staff);

// console.log(emailForIn);
// assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


// _______________March 20th loopStaff each/map Exercises______________________

function loopWithEach (array1) {
	// console.log("In the Loop With Each Callback function")
	const array2 = [];
	array1.forEach((a) => {
		array2.push(makeEmailObj(a));
	})
	return array2;
}


function loopWithMap (array1) {
	console.log("In the Loop With Map Callback function")
	return array1.map((a) => makeEmailObj(a));
	}

// function loopWithMap (array1) {
// 	console.log("In the Loop With Map Callback function")
// 	const array2 = array1.map((a) => {
// 		return makeEmailObj(a);
// 	})
// 	return array2;
// }

// console.log('-----emailWithEach')
// const emailWithEach = loopWithEach(data.staff);
// console.log(emailWithEach);
// assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);


// console.log('-----emailWithMap')
// const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
// assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);


// _______________March 21st More Array Exercises______________________







// _______________March 28st More Array Exercises (Really)______________________

console.log('-----MoreArrayExerciese')


let largeBalances = data.staff.filter((a) => a.balance >= 1000)


// let largeBalances = data.staff.filter((a) => {
// 	if (a.balance >= 1000) {
// 		return true; 	
// 	}
// 	else {
// 		return false;
// 	}
// })

// console.log(largeBalances);

assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");


// _______________March 29th More Array Exercises (you're freaking kidding me)________________


let tot = data.staff.reduce((acc,currentValue) => {
	
		return acc + currentValue.balance;
		
	},0);

console.log(tot);
assertEquals(tot, 3823);


// _______________April 5th Callback Exercises (Part 1)________________________________________


let people1 = [
    {fname:"Alex", lname:"Smith", province:"BC", age:33},
    {fname:"Angela", lname:"Jones", province:"AB", age:61},
    {fname:"Anne", lname:"Bird", province:"SK", age:35},
    {fname:"Brent", lname:"Riddle", province:"MN", age:79},
    {fname:"Byron", lname:"Cardenas", province:"BC", age:38},
    {fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
    {fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
    {fname:"Dima", lname:"Curry", province:"MN", age:67},
    {fname:"Dustin", lname:"Bullock", province:"BC", age:59},
    {fname:"Eva", lname:"Keiths", province:"AB", age:24},
    {fname:"Faith", lname:"Liu", province:"SK", age:46},
    {fname:"Fawad", lname:"Bowman", province:"MN", age:69},
    {fname:"Forest", lname:"Vaughn", province:"BC", age:52},
    {fname:"Giovanni", lname:"Browning", province:"AB", age:32},
    {fname:"Greg", lname:"Hogan", province:"SK", age:55},
    {fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
    {fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
    {fname:"James", lname:"Kramer", province:"AB", age:57},
    {fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
    {fname:"Jawad", lname:"Huerta", province:"MN", age:35},
    {fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
    {fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
    {fname:"Joe", lname:"Banks", province:"SK", age:37},
    {fname:"Kristina", lname:"Dalton", province:"MN", age:73},
    {fname:"Latora", lname:"Matthews", province:"BC", age:25},
    {fname:"Lauren", lname:"McClure", province:"AB", age:42},
    {fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
    {fname:"Linden", lname:"Pierce", province:"MN", age:68},
    {fname:"Luis", lname:"Price", province:"BC", age:23},
    {fname:"Marcela", lname:"Perez", province:"AB", age:20},
    {fname:"Marilou", lname:"Graham", province:"SK", age:32},
    {fname:"Matt", lname:"Novak", province:"MN", age:29},
    {fname:"Monica", lname:"Giles", province:"BC", age:34},
    {fname:"Niloufar", lname:"Carson", province:"AB", age:29},
    {fname:"Omar", lname:"Olson", province:"SK", age:69},
    {fname:"Roger", lname:"Woodard", province:"MN", age:84},
    {fname:"Roman", lname:"Swanson", province:"BC", age:21},
    {fname:"Seun", lname:"Kelly", province:"AB", age:60},
    {fname:"Shane", lname:"Frost", province:"SK", age:87},
    {fname:"Steven", lname:"Haynes", province:"MN", age:47},
    {fname:"Thomas", lname:"Hart", province:"BC", age:14},
    {fname:"Trent", lname:"Kerr", province:"AB", age:12},
    {fname:"Darrell", lname:"Koch", province:"SK", age:10},
    {fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

console.log ("------- Callback Exercises (Part 1)")

let processPeople = function(data, callback) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].province === "AB" || data[i].province === "BC") {
			if (typeof callback === "function") {
				callback(data[i]);
			}
		}
	}
}
//
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function
//
processPeople(people1, function(item) {
	if (item.age > 25) {
		// console.log(item.fname + " " + item.lname + " is from " + item.province + " and is " + item.age + "years old.");
	}
});

let determineTotal = function () {
	let total = 0;
	let count = 0;

	processPeople(people1, function(item) {
		total = total + item.age;
		count++
	});
	console.log("Total age:" + total + " and the number of people is " + count);
}

determineTotal();



// _______________April 29th Callback Exercises (Part 2)________________________________________

console.log ("------- Callback Exercises (Part 2)")

let determineTotal2 = function() {
	
	
};

determineTotal2();


// write a function which logs to the console the total number of people, total age, 
// and average age of people from BC and Alberta only, regardless of age. 
