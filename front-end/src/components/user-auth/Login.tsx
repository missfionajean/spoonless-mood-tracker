export default function Login() {
	return (
		<form action="submit">
			<label htmlFor="username">Username</label>
			<input type="text" required={true} />
			<label htmlFor="password">Password</label>
			<input type="text" required={true} />
			<button>Submit</button>
		</form>
	);
}

// look up other websites and libraries for inspo and pre-built components
