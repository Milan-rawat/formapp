import React, { useState } from "react";
import classes from "./Register.module.css";
import Input from "../../components/Input";
import Swal from "sweetalert2";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Password doesn't match",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password.length < 8 || confirmPassword.length < 8) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Password length should be minimum 8",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Successfully Registered",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(fullName);
      console.log(username);
      console.log(email);
      console.log(phoneNumber);
      console.log(password);
      console.log(confirmPassword);
      setFullName("");
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className={classes.registerpage}>
      <div className={classes.formBox}>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.formHeading}>
            <p>Registration</p>
            <div></div>
          </div>

          <div className={classes.row}>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              value={fullName}
              setValue={setFullName}
              required={true}
            />
            <Input
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              setValue={setUsername}
              required={true}
            />
          </div>

          <div className={classes.row}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              setValue={setEmail}
              required={true}
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your number"
              value={phoneNumber}
              setValue={setPhoneNumber}
              required={true}
            />
          </div>
          <div className={classes.row}>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              setValue={setPassword}
              required={true}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              required={true}
            />
          </div>
          <div className={classes.lastRow}>
            <p className={classes.radioHeading}>Gender</p>
            <div className={classes.radioInput}>
              <div className={classes.radioChoice}>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="MALE"
                  required
                />
                <label for="male">Male</label>
              </div>
              <div className={classes.radioChoice}>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="FEMALE"
                  required
                />
                <label for="female">Female</label>
              </div>
              <div className={classes.radioChoice}>
                <input
                  type="radio"
                  id="nottosay"
                  name="gender"
                  value="NOTTOSAY"
                  required
                />
                <label for="nottosay">Prefer not to say</label>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
