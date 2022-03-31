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
                    // var userPhoto = userDoc.data().photo;
                    var userPost = userDoc.data().post;
                    var userLocation = userDoc.data().location;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    // if (userPhoto != null) {
                    //     document.getElementById("photoInput").value = userPhoto;
                    // }
                    if (userPost != null) {
                        document.getElementById("postInput").value = userPost;
                    }
                    if (userLocation != null) {
                        document.getElementById("locationInput").value = userLocation;
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

function editUserPost() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }

 function saveUserPost() {
    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    // userPhoto = document.getElementById('photoInput').value;     //get the value of the field with id="schoolInput"
    userPost = document.getElementById('postInput').value;
    userLocation = document.getElementById('locationInput').value;

    currentUser.update({
        username: userName,
        // photo: userPhoto,
        Post: userPost,
        Location: userLocation
    })

    .then(() => {
        console.log("Document successfully updated!");
    })

    document.getElementById('personalInfoFields').disabled = true;
}

// Uploads pictures to firestore storage
// caled by the user
// function uploadImage() {
//     const ref = firebase.storage().ref();
//     const file = document.getElementById('photoInput').files[0];
//     const name = +new Date() + "-" + file.name;
//     const metadata = {
//         contentType: file.type
//       };
//       const task = ref.child(name).put(file, metadata);
//       task
//         .then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//           console.log(url);
//           const image = document.querySelector("#image")
//           image.src = url
//         })
//         .catch(console.error);
//}
