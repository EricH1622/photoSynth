## photoSynth

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
photoSynth is our Comp1800 final project.  It is a photo sharing application aimed at creating a platform 
for photographers to collaborate with others by sharing their work as well as finding inspiring new locations to shoot their photography.
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
	
## Content

```
 Top level of project folder: 

├── index.html               # landing HTML file, this is what users see when you come to url and the main featured page of our application.
├── landing.html             # The display page a user is taken to when using desktop. Used for display in the demo of our app.
├── login.html               # The page where a user can login/create an account with a username, email, and password to use on our application.
├── profile_creation.html    # The page where a user can create a custom profile for themselves.
├── profile.html             # Where the user can see their profile information, and posts.
├── .gitignore               # Git ignore file.
└── README.md                # A text description of the contents of our project.

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images used in the project.            
├── scripts                  # Folder for scripts
    /Authentication.js       # Login authentication script using Firebase.
    /featured.js             # The script powering the post pages. It allows the post information to populate automatically.
    /firebaseAPI_TEAM31.js   # The Firebase connectivity script allowing our application to be powered by Firebase.
    /main.js                 # Allows user posts to populate into the main page (index.html).
    /profile_creation.js     # Powers the profile creation page allowing the user to enter information about themselves and a profile photo.
    /upload.js               # Allows the user to create a post with a photo and fill out information and uploads it to Firebase database.
├── styles                   # Folder for styles
    /Buntzenstyle.css        # Preliminary CSS style sheet for one of our prototype pages
    /homepage_style.css      # Styling for our main homepage.
    /landing.css             # Styling for our landing page.
    /loginstyle.css          # Styling for user login page.
    /profile_style.css       # Styling for the user profile page.


Firebase hosting files: 
├── .firebaserc...
├── firebase.json


