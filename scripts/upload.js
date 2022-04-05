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
                    var userDescription = userDoc.data().description;
                    var userSettings = userDoc.data().settings;

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
                    if (userDescription != null) {
                        document.getElementById("descriptionInput").value = userDescription;
                    }
                    if (userDescription != null) {
                        document.getElementById("settingsInput").value = userSettings;
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
    userDescription = document.getElementById('descriptionInput').value;
    userSettings = document.getElementById('settingsInput').value;

    currentUser.update({
        username: userName,
        // photo: userPhoto,
        Post: userPost,
        Location: userLocation,
        Description: userDescription,
        Settings: userSettings
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

//----------------------------------------------------
// This event listener waits for user to upload a image
//-----------------------------------------------------
var theFile;      //global variable pointing to the locally picked file object
function addImagePicker() {
    const fileChoice = document.getElementById("mypic-input"); // pointer #1
    const image = document.getElementById("mypic-goes-here"); // pointer #2
    fileChoice.addEventListener('change', function (e) { //event listener
        theFile = e.target.files[0];
        var blob = URL.createObjectURL(theFile);
        image.src = blob; //show this DOM image for now
    })
}
addImagePicker();

// //----------------------------0------------------------
// // This event listener waits for user to upload a image
// //-----------------------------------------------------
// function addImagePicker() {
//     const fileChoice = document.getElementById("mypic-input"); // pointer #1
//     const image = document.getElementById("mypic-goes-here"); // pointer #2
//     fileChoice.addEventListener('change', function (e) { //event listener
//         var file = e.target.files[0];
//         var blob = URL.createObjectURL(file);
//         image.src = blob; //change DOM image
//         console.log (file);  //just FYI, whole file object
//         console.log(file.name);  //just FYI, name of file
//         console.log(blob);  //string that represents file
//         //Temporarily store file object into local stroage
//         localStorage.setItem("pickedfile", file);
//     })
// }
// addImagePicker();


//--------------------------------------------------------------
        // This function is the event listener for the post button.
        // it will go get the details entered by user at the DOM
        // Create a new post object using ".add()"
        // Then save the image that was previously uploaded.
        //-------------------------------------------------------------
        function addPostListener() {
            document.getElementById("post").addEventListener("click", function () {
                //alert("Post clicked!");

                //construct a new post object with details from our form
                var postdetails = document.getElementById("descriptionInput").value;
                var obj = {
                    details: postdetails,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }
                //console.log(obj);

                //create a new post doc and save into firestore with ".add"
                db.collection("posts")
                    .add(obj)
                    .then(function (doc) {
                        console.log("Created a new post object! ");
                        console.log(doc.id); //prints id of the newly added doc
                        savePicture(doc.id)  //id of newly created post
                    })
            })
        }
        addPostListener();

                //------------------------------------------------------
        // This function gets the picture that was recently picked
        // and saved into localstorage, and "put" it into Firebase Storage.
        // After it is done, then the URL is obtained.
        // This URL is saved into the post object associated with this image
        //-------------------------------------------------------
        function savePicture(postid) {

            //get the file that was picked earlier
            var file = localStorage.getItem("pickedfile");

            //get a pointer to where we went the picture to be saved
            var storageRef = firebase.storage().ref(postid + ".jpg")

            //upload the picked file with .put()
            storageRef.put(file)
                .then(function (snap) {
                    //the file has successfully been put into storage
                    console.log('Uploaded to Cloud Storage.');
                    //get the URL of stored file with .getDownloadURL()
                    storageRef.getDownloadURL()
                        .then(function (url) { // Get URL of the uploaded file
                            console.log(url); // Save the URL into users collection
                            console.log(`File URL: ${url}`);
                            db.collection("posts").doc(postid).update({
                                    "image": url
                                })
                                .then(function () {
                                    console.log('Added post picture to Firestore.');
                                    window.location.href="postFeatured.html";
                                })
                        })
                })
        }


