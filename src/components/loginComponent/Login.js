import React from "react";
import { accessUrl } from "../../spotify";
import "./Login.css";

const Login = () => {
	return (
		<div className="login">
		  <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
           alt="spotifyLogo"/>
           <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;