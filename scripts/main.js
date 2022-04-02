
function like(){


    let change = document.querySelector("#icon");



        if (this.innerText == 'favorite') {
            change.innerText = "favorite_border";

        } else {
            change.innerText = "favorite";

        }


}





// function writeLocatoins() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var hikesRef = db.collection("Locations");

//     hikesRef.add({
//         id: "untzen lake.jpg",
//         name: "Buntzen Lake", //replace with your own city?
//         city: "Burnaby",
//         province: "BC",
//         order: "1",

//         //number value
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
//     });
//     hikesRef.add({
//         id: "1180056.jpg",
//         name: "Alta Lake", //replace with your own city?
//         city: "Anmore",
//         province: "BC",
//         order: "2",
//         //number value
//         last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
//     });
// }

function populateCardsDynamically() {
    let hikeCardTemplate = document.getElementById("hikeCardTemplate");
    let hikeCardGroup = document.getElementById("hikeCardGroup");

    db.collection("Locations")
        .orderBy("order")            //NEW LINE;  what do you want to sort by?
        .limit(2)                       //NEW LINE:  how many do you want to get?
        .get()
        .then(allHikes => {
            allHikes.forEach(doc => {
                var hikeName = doc.data().name; //gets the name field
                var hikeID = doc.data().id; //gets the unique ID field
                let testHikeCard = hikeCardTemplate.content.cloneNode(true);
                testHikeCard.querySelector('.card-title').innerHTML = hikeName;

                //NEW LINE: update to display length, duration, last updated
                testHikeCard.querySelector('.card-length').innerHTML =

                    "Last updated: " + doc.data().last_updated.toDate();

                    testHikeCard.querySelector('i').onclick = () => like();

                testHikeCard.querySelector('img').src = `./images/${hikeID}.jpg`;
                hikeCardGroup.appendChild(testHikeCard);
            })
        })
        
}

// function populateCardsDynamically() {
//     let hikeCardTemplate = document.getElementById("hikeCardTemplate");
//     let hikeCardGroup = document.getElementById("hikeCardGroup");

//     db.collection("posts")
//         .orderBy("order")            //NEW LINE;  what do you want to sort by?
//         .limit(2)                       //NEW LINE:  how many do you want to get?
//         .get()
//         .then(allHikes => {
//             allHikes.forEach(doc => {
//                 var postName = doc.data().details; //gets the name field
//                 var PhotoID = doc.data().image; //gets the 'image' url?
//                 let testHikeCard = hikeCardTemplate.content.cloneNode(true);
//                 testHikeCard.querySelector('.card-title').innerHTML = postName;

//                 //NEW LINE: update to display length, duration, last updated
//                 testHikeCard.querySelector('.card-length').innerHTML =

//                     "Last updated: " + doc.data().timestamp.toDate();

//                     testHikeCard.querySelector('i').onclick = () => like();

//                 testHikeCard.querySelector('img').src = `./images/${photoID}.jpg`;
//                 hikeCardGroup.appendChild(testHikeCard);
//             })
//         })
        
// }
populateCardsDynamically();

function showDatabasePicture() {
    db.collection("posts")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var pictureURL = doc.data().image;   //url is ready to use
                console.log(pictureURL);
                if (pictureURL) {   //ie, not undefined or null
                    document.getElementById("database-picture-goes-here").innerHTML +=
                        "<img src=" + pictureURL + "> <br>";

                }
            })
        })
}
showDatabasePicture();