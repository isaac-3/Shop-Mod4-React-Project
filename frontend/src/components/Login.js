import React, { useState } from "react";
// import SignUp from './SignUp'
export function Login(props) {
  let [user, changeUser] = useState({
    username: "",
    password: "",
  });
  let [new_user, changeNewUser] = useState({
    new_username: "",
    new_password: "",
    new_address: "",
    new_email: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });
    let { success, id } = await response.json();
    if (success) {
      props.history.push("/home", id);
    } else {
      alert("incorrect");
    }
  }
  async function handleCreate(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/users", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: new_user.new_username,
        password: new_user.new_password,
        address: new_user.new_address,
        email: new_user.new_email,
      }),
    });
    let { success, id } = await response.json();
    if (success) {
      props.history.push("/home", id);
    } else {
      alert("taken username");
    }
  }
  return (
    <div className=" container row row-cols-2 row-cols-md-3">
      <form onSubmit={handleSubmit} className="auth-wrapper auth-inner row-">
        <h1>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Username </label>
          <input
            className="ml-1"
            type="text"
            value={user.username}
            onChange={(e) => changeUser({ ...user, username: e.target.value })}
            placeholder="Trello_342"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password </label>
          <input
            className="ml-1"
            type="password"
            value={user.password}
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
        </div>
        <button input="submit" class="btn btn-primary">
          Log in
        </button>
      </form>
      <div>
        <form
          onSubmit={handleCreate}
          className="auth-wrapper auth-inner row-cols-1 "
        >
          <h1>Sign Up</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Username </label>
            <input
              className="ml-1"
              type="text"
              value={new_user.new_username}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_username: e.target.value })
              }
              placeholder="MyName123"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password </label>
            <input
              className="ml-1"
              type="password"
              value={new_user.new_password}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_password: e.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input
              className="ml-1"
              type="text"
              value={new_user.new_address}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_address: e.target.value })
              }
              placeholder="Your address"
            />
          </div>
          <div class="form-group ml-3">
            <label for="exampleInputPassword1">Email </label>
            <input
              className="ml-1"
              type="text"
              value={new_user.new_email}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_email: e.target.value })
              }
              placeholder="imawesome@example.com"
            />
          </div>
          <button input="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
