//import the function from the realtime database module
import { getDatabase } from 'firebase/database';
//alias the `set` function as `firebaseSet`
import { ref, set as firebaseSet } from 'firebase/database'

//get a reference to the database service
const db = getDatabase();

//variable name to access
const personName = "Ada";

//access the "Ada" property inside of the "people" property inside the database
const personOfInterestRef = ref(db, "people/"+personName);


//alias the `set` function as `firebaseSet`
import { ref, set as firebaseSet } from 'firebase/database'

//get a reference to where sarah's age is stored in the database
const sarahAgeRef = ref(db, "people/sarah/age");

//change Sarah's age to 43 (happy birthday!)
const newValueForSarahAge = 43;

//assign the new value in the database
firebaseSet(sarahRef, newValueForSarahAge);