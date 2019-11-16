let firstName = "Benjamin";
let surName = "Hughes";
useFormalName = true;

const fullname = getFullname(firstName,surName,true);
console.log(fullname); 

function getFullname(firstname,surename,useFormalName) {
  if (useFormalName) {
 
     let displayFormalName = "Lord "+ " " + firstname + " " + surename 
     return displayFormalName;
 } else {
    
  let displayFullName = firstname + " " + surename
  return displayFullName;
}
}
