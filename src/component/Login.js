// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'; 

// const Login = () => {
//   const [name, setName] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault(); // Prevent default form submission
//     console.warn("name, password", name, password);

//     let result = await fetch('http://localhost:5000/login', {
//       method: 'POST',
//       body: JSON.stringify({ name, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     result = await result.json();
//     console.warn(result);

//     if (result.name) {
//       localStorage.setItem('user', JSON.stringify(result));
//       navigate('/add');
//     } else {
//       alert('Please enter correct details');
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
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
//           <button className="appbutton" type="submit">
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Login = ({ onLogin }) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.warn("name, password", name, password);

    let result = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();
    console.warn(result);

    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      onLogin();
      navigate('/add');
    } else {
      alert('Please enter correct details');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button className="appbutton" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
