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
                    var userCamerag = userDoc.data().camerag;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("usernameinput").value = userName;
                    }
                    if (userBio != null) {
                        document.getElementById("bioinput").value = userBio;
                    }
                    if (userCity != null) {
                        document.getElementById("cityinput").value = userCity;
                    }
                    if (userCarmerag != null) {
                        document.getElementById("cameraginput").value = userCamerag;
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
    userName = document.getElementById('usernamenput').value;       //get the value of the field with id="nameInput"
    userSchool = document.getElementById('bioinput').value;     //get the value of the field with id="schoolInput"
    userCity = document.getElementById('cityinput').value;

    currentUser.update({
        name: userName,
        school: userBio,
        city: userCity,
        camerag: userCamerag

    })
        .then(() => {
            console.log("Document successfully updated!");
        })

    document.getElementById('personalInfoFields').disabled = true;
}