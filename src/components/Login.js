import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    repeatPassword: "",
    emailAddress: "",
    
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { userName, password, repeatPassword, emailAddress } = userData;

    if (userName && password && repeatPassword && emailAddress) {
      const res = fetch(
        "https://thsem-pro-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            password,
            repeatPassword,
            emailAddress,
            
          }),
        }
      );

      if (res) {
        setUserData({
          userName: "",
          password: "",
          repeatPassword: "",
          emailAddress: "",

        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };
  


    return (
        <div>
        <div class="harsh20">
      <div class="row">
      <div class="col-md-6 mx-auto p-0">
          <div class="card">
              <div class="login-box">
                  <div class="login-snip"> 
                  <input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
                    <label for="tab-1" class="tab" style={{cursor:'pointer'}}>Login</label> 
                  <input id="tab-2" type="radio" name="tab"  class="sign-up"/><label for="tab-2" class="tab" style={{cursor:'pointer'}}>Sign Up</label>
                      <div class="login-space">
                          <div class="login">
                              <div class="group"> <label for="user" class="label">Username</label> 
                              <input id="user" type="text" class="input" placeholder="Enter your username"/> </div>
                              <div class="group"> <label for="pass" class="label">Password</label> 
                              <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password"/> </div>
                              <div class="group"> <input id="check" type="checkbox" class="check" checked/>
                                 </div>
                              <div class="group"> <input type="submit" class="button" style={{cursor:'pointer'}} value="Sign " /></div>
                              <div class="hr"></div>
                              <div class="foot"> <a href="/">Forgot Password?</a> </div>
                          </div>
                          <div class="sign-up-form">
                              <div class="group"> <label for="user" class="label" >Username</label> 
                              <input id="user" type="text" class="input"
                                name = "userName"
                                value={userData.userName}
                                onChange={postUserData}
                                 placeholder="Create your Username"/> </div>
                              <div class="group"> <label for="pass" class="label">Password</label> 
                              <input id="pass" type="password" class="input"
                                 data-type="password"
                                 name = "password"
                                 value={userData.password}
                                 onChange={postUserData}
                                 placeholder="Create your password"/> </div>
                              <div class="group"> <label for="pass" class="label">repeatPassword </label> 
                              <input id="pass" type="password" class="input"
                                data-type="password"
                                name = "repeatPassword"
                                value={userData.repeatPassword}
                                onChange={postUserData} 
                                placeholder="Repeat your password"/> </div>
                              <div class="group"> <label for="pass" class="label">emailAddress</label> 
                              <input id="pass" type="text" class="input"
                                name = "emailAddress"
                                value={userData.emailAddress}
                                onChange={postUserData}
                                placeholder="Enter your email address"/> </div>
                              <div class="group"> <input type="submit" class="button" style={{cursor:'pointer'}} onClick={submitData} value="Sign Up"/> </div>
                              <div class="hr"></div>
                              <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
  </div>
    );
};

export default Contact;
