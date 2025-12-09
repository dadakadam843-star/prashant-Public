<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyDW9Au99PFKyMz7kBKypIKPIOex_ZkJ3uY",
  authDomain: "public-working.firebaseapp.com",
  projectId: "public-working",
  storageBucket: "public-working.appspot.com",
  messagingSenderId: "266169229854",
  appId: "1:266169229854:web:87218d1d726fb50714840f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
</script>
