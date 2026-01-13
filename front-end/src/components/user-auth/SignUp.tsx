export default function SignUp() {
	return (
		<form action="submit">
			<label htmlFor="username">Choose a username:</label>
			<input type="text" required={true} />
			<label htmlFor="password">Choose a password:</label>
			<input type="text" required={true} />
			<button>Submit</button>
		</form>
	);
}

// look up other websites and libraries for inspo and pre-built components
