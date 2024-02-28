import AllRoute from "./components/AllRoute";
import { getDatabase, ref, child, get, Database } from "firebase/database";
import "./App.css";
import { realtimeDB } from "./firebase";

function App() {
//   const dbRef = ref(realtimeDB);
//   get(child(dbRef, `city`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
