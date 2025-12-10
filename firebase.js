<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyDW9Au99PFKyMz7kBKypIKPIOex_ZkJ3uY",
  authDomain: "public-working.firebaseapp.com",
  projectId: "public-working",
  storageBucket: "public-working.firebasestorage.app",
  messagingSenderId: "266169229854",
  appId: "1:266169229854:web:87218d1d726fb50714840f",
  measurementId: "G-YC65VGDQTE"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
</script>
