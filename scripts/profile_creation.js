var currentUser 

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userBio = userDoc.data().bio;
                    var userCity = userDoc.data().city;
                    var userCameragear = userDoc.data().gear;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userBio != null) {
                        document.getElementById("bioInput").value = userBio;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                    if (userCameragear != null) {
                        document.getElementById("gearInput").value = userCameragear;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }

 function saveUserInfo() {
    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    userBio = document.getElementById('bioInput').value;     //get the value of the field with id="schoolInput"
    userCity = document.getElementById('cityInput').value;
    userCameragear = document.getElementById('gearInput').value;

    currentUser.update({
        username: userName,
        bio: userBio,
        city: userCity,
        gear: userCameragear
    })
    .then(() => {
        console.log("Document successfully updated!");
        window.location.href="Profile.html";
    })

    document.getElementById('personalInfoFields').disabled = true;
}

function insertName(){
    // to check if the user is logged in:
     firebase.auth().onAuthStateChanged(user =>{
         if (user){
             console.log(user.uid); // let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
            currentUser.get().then(userDoc=>{
                //get the user name
                var user_Name= userDoc.data().name;
                var user_Bio = userDoc.data().bio;
                var user_City = userDoc.data().city;
                var user_Gear = userDoc.data().gear;
                console.log(user_Name);
                $("#name-goes-here").text(user_Name); //jquery
                $("#bio-goes-here").text(user_Bio);
                $("#city-goes-here").text(user_City);
                $("#gear-goes-here").text(user_Gear);


                // document.getElementByID("name-goes-here").innetText=user_Name;
            })    
        }
    
     })
    }
    insertName();


