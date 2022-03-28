function deleteText(){
    document.getElementById("resultdiv").innerHTML = "";
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("resultdiv").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("resultdiv").innerHTML = content;
}
var firebaseConfig = {
    apiKey: "AIzaSyBX_Lx_rCNeE9fB2-IdPlB--PxjXLONQJc",
    authDomain: "c-97--problem-solving-project.firebaseapp.com",
    databaseURL: "https://c-97--problem-solving-project-default-rtdb.firebaseio.com",
    projectId: "c-97--problem-solving-project",
    storageBucket: "c-97--problem-solving-project.appspot.com",
    messagingSenderId: "180636347820",
    appId: "1:180636347820:web:552f4a797ae4a07ba89e09"
  };
  firebase.initializeApp(firebaseConfig);
  var user = localStorage.getItem("user_name");
var file = localStorage.getItem("file_name");
function save(){
      var text = document.getElementById("resultdiv").value;
      firebase.database().ref(room).push({
            name: user,
            text: text,
            });
      document.getElementById("resultdiv").value = "";
}

function getData() { firebase.database().ref("/"+file_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         text_data = childData;
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

