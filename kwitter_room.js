var firebaseConfig = {
      apiKey: "AIzaSyCUNqDgAvdCpjT0p7vULrkJWLg-MXH-FGQ",
      authDomain: "project-94-88ae7.firebaseapp.com",
      databaseURL: "https://project-94-88ae7-default-rtdb.firebaseio.com",
      projectId: "project-94-88ae7",
      storageBucket: "project-94-88ae7.appspot.com",
      messagingSenderId: "950683613599",
      appId: "1:950683613599:web:43c75cc4e99d9fd929a5aa",
      measurementId: "G-L8H20WW7TN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function add_name(){
user=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user;
}
//ADD YOUR FIREBASE LINKS HERE
function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      Purpose:"Adding New Room"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; });
      //End code
      });}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="kwitter_login.html";
}