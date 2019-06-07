/*
    --- make me an email
    Write the function that will make this code work.
*/
console.log("Make me an Email");

// ---- put function here ----
function makeEmail (firstName, lastName) {
 	const larryEmail = (firstName+"."+lastName+"@evolveu.ca")
 	return larryEmail;
}

const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
    console.log("***** We have an error here *****",
        larryEmail,
        " is not = ",
        shouldBeLarryEmail,
        " and it should be."
    )
}

console.log("Larry:", larryEmail);
console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("bill", "lee"));
console.log("Sam:", makeEmail("sam", "lee"));
