import "./Auth.scss";

import { useState } from "react";
import { useMutation } from "react-query";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { AuthService } from "../../../services/auth.service";
import { useAuth } from "../../../providers/AuthProvider";

const Auth = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [authType, setAuthType] = useState("login");
	const [isShowPassword, setShowPassword] = useState(true);

	const { setUser } = useAuth();

	const { mutateAsync: loginAsync } = useMutation("login", () => AuthService.login(data.email, data.password), {
		onError: (err) => {
			console.log(err);
		},
		onSuccess: ({ data }) => {
			setUser(data.user);
		},
	});

	const { mutateAsync: registerAsync } = useMutation(
		"register",
		() => AuthService.register(data.email, data.password),
		{
			onError: (err) => {
				console.log(err);
			},
			onSuccess: ({ data }) => {
				setUser(data.user);
			},
		}
	);

	const isLogin = authType === "login";

	const handleSubmit = (event) => {
		event.preventDefault();

		isLogin ? loginAsync() : registerAsync();
	};

	return (
		<div className="auth">
			<h1 className="auth__title">Password Manager</h1>

			<form className="auth__form" onSubmit={handleSubmit}>
				<input
					className="email"
					type="email"
					placeholder="Email"
					value={data.email}
					onChange={(event) => setData({ ...data, email: event.target.value })}
				/>
				<div>
					<input
						className="password"
						type={isShowPassword ? "password" : "text"}
						placeholder="Password"
						value={data.password}
						onChange={(event) => setData({ ...data, password: event.target.value })}
					/>
					<div className="icon" onClick={() => setShowPassword(!isShowPassword)}>
						{isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
					</div>
				</div>

				<button className="button" type="submit">
					{isLogin ? "Login" : "Sign up"}
				</button>
			</form>

			<span className="auth__button-title">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
			<button className="auth__button" onClick={() => setAuthType(isLogin ? "register" : "login")}>
				{isLogin ? "Sign up" : "Login"}
			</button>
		</div>
	);
};

export default Auth;
