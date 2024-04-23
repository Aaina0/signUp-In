import { useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function Home() {
  // const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success") {
          // navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>Home Component</div>;
}

export default Home;
