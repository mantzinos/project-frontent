import axios from "axios";
import "./App.css";

function App() {
  var adm = {
    username: "Admin2",
    password: "123456"
  };

  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImNiYmVlYTYwLWNhNWUtNDc3NS05NTgxLTlmOWI3YzcyNzNhMCIsImV4cCI6MTczNDc2MDM1NSwiaXNzIjoiRnJlZVRyYWluZWQifQ.49r5owcRudOaajAOZy4oThwjr9NgwfKDVBVOxp2h9UQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbjIiLCJqdGkiOiI1OGQ2MjE5MS0wNWIzLTRmYTgtYWJlNC1jMWJhYzE1ZWU5YmQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTczNDc2MDcxOCwiaXNzIjoiRnJlZVRyYWluZWQifQ.QEm1GF7ifsB0Apd_AX8h1aI6tzV0x0lQWdW7FpSAJEg";

  async function getAdmin() {
    try {
      var response = await axios.post(
        "https://localhost:7253/api/Account/login",
        adm
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  // axios.defaults.headers.common = {
  //   Authorization: "Bearer " + token
  // };

  async function goToAdmin() {
    try {
      var response = await axios.get("https://localhost:7253/api/Admin", {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      console.log("Admin Response:", response.data);
    } catch (error) {
      console.error("Admin Error:", error.message);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getAdmin}>POst to admin</button>
        <button onClick={goToAdmin}>get admin</button>
      </header>
    </div>
  );
}

export default App;
