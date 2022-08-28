import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase,set,ref,get,child,update,remove,onValue,push} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_KF70EKOFtPMeKKEgF4G_r_DjJzFSq54",
  authDomain: "fmpw-d4ec7.firebaseapp.com",
  databaseURL: "https://fmpw-d4ec7-default-rtdb.firebaseio.com",
  projectId: "fmpw-d4ec7",
  storageBucket: "fmpw-d4ec7.appspot.com",
  messagingSenderId: "1020693922322",
  appId: "1:1020693922322:web:4937d34449ba7b79df0ecb",
  measurementId: "G-8EWGNEQHV2"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);


  var name=document.getElementById('name').value
  var email=document.getElementById('email').value
  var subject=document.getElementById('subject').value
  var detail=document.getElementById('detail').value
  var btn=document.getElementById('contact')
  console.log(btn)
  btn.addEventListener('click',function(e){
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{

        const user = userCredential.user;
        alert('successfully SignUp')
        var db=getDatabase();
          var key =ref(db,'users/')
          newpost =push(key)
        set(newpost,{
          Name:name.value,
            Email : email.value,
            Subject:subject.value,
            Detail:detail.value,

            key: newpost.key
        })
        .then(function(e){
            alert('data stored succesfully')
        })
        .catch(function(error){
            alert('data is not stored')
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    })
        









        //     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ...
//       });
//   })


  
  