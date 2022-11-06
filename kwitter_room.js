
const firebaseConfig = {
  apiKey: "AIzaSyBj_n-z_7AIwwsx0RIuxmPU3nXtYtU-zXw",
  authDomain: "kwitter-454c1.firebaseapp.com",
  databaseURL: "https://kwitter-454c1-default-rtdb.firebaseio.com",
  projectId: "kwitter-454c1",
  storageBucket: "kwitter-454c1.appspot.com",
  messagingSenderId: "591416158025",
  appId: "1:591416158025:web:e8aaf9a413e60a2d4cdc98"
};
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem('UserName');

    document.getElementById('userName').innerHTML='welcome '+user_name+'!';

    function addRoom(){
      room_name=document.getElementById('roomName').value;
      console.log(room_name);
      firebase.database().ref('/').child(room_name).update({purpose:'adding room name'});
      localStorage.setItem('room_name', room_name);
      window.location='kwitter_page.html';
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log('room name = '+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById('output').innerHTML=row;
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem('room_name',name);
      window.location='kwitter_page.html';
}
