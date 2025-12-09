<!-- firebase.js (v8 WORKING) -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>

<script>
var firebaseConfig = {
  apiKey: "AIzaSyDW9Au99PFKyMz7kBKypIKPIOex_ZkJ3uY",
  authDomain: "public-working.firebaseapp.com",
  projectId: "public-working",
  storageBucket: "public-working.appspot.com",
  messagingSenderId: "266169229854",
  appId: "1:266169229854:web:87218d1d726fb50714840f"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
</script>
