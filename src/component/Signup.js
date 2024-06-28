// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const collectData = async () => {
//     console.warn(name, password);
//     let result = await fetch("http://localhost:5000/register", {
//       method: "post",
//       body: JSON.stringify({ name, password }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result) {
//       navigate("/add");
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Sign Up</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             collectData();
//           }}
//         >
//           <label>
//             Username:
//             <input
//               className="inputbox"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               className="inputbox"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//               required
//             />
//           </label>
//           <button onClick={collectData} type="button">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = ({ onSignup }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(name, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      onSignup();
      navigate("/add");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            collectData();
          }}
        >
          <label>
            Username:
            <input
              className="inputbox"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </label>
          <label>
            Password:
            <input
              className="inputbox"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </label>
          <button onClick={collectData} type="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
