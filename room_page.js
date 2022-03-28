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
    var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name;
  function addFile()
  {
        file_name = document.getElementById("file_name").value;
        firebase.database().ref("/").child(file_name).update({
              purpose: "adding filename"
        });
  localStorage.setItem("file_name", file_name);
  window.location = "main_page.html";
  }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         File_names = childKey;
        console.log("file_name = " +File_names);
        row = "<div class = 'file_name' id = "+File_names+"onclick='redirecttofilename'> "+File_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
       });});}
  getData();
  function redirecttofilename(name){
        console.log(name);
        localStorage.setItem("file_name", name);
        window.location = "main_page.html";
        }
        function logout()
        {
              localStorage.removeItem("file_name");
              localStorage.removeItem("user_name");
              window.location = "index.html";
        }
