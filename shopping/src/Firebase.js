import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const apiKey = firebaseConfig.apiKey;
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

function handleGoogleLogin() {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // provider를 구글로 설정
      return (
        signInWithPopup(auth, provider)
          // popup을 이용한 signup
          .then((data) => {
            console.log(data.user); // console로 들어온 데이터 표시
          })
          .catch((err) => {
            console.log(err);
          })
      );
    })
    .catch((error) => {
      console.error("Error setting persistence:", error);
    });
}
const onLogOutClick = () => {
  signOut(auth);
  // navigate("/");
};
function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}
async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}
export {
  app,
  auth,
  apiKey,
  adminUser,
  onLogOutClick,
  handleGoogleLogin,
  onUserStateChange,
};
