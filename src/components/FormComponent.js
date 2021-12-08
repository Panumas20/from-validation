import './FormComponent.css';
import { useState } from 'react';
const FormComponent = () => {
	const [userName, setuserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRepassword] = useState('');

	const [errorUsername, setErrorUsername] = useState('errorUsername');
	const [errorEmail, setErrorEmail] = useState('errorEmail');
	const [errorPassword, setErrorPassword] = useState('errorPassword');
	const [errorRepassword, setErrorRepassword] = useState('errorRepassword');

	return (
		<div className="container">
			<h2>แบบฟอร์มลงทะเบียน</h2>
			<form className="form">
				<div className="form-control">
					<label>ชื่อผู้ใช้</label>
					<input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} />
					<small>{errorUsername}</small>
				</div>
				<div className="form-control">
					<label>Email</label>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
					<small>{errorEmail}</small>
				</div>
				<div className="form-control">
					<label>รหัสผ่าน</label>
					<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
					<small>{errorPassword}</small>
				</div>
				<div className="form-control">
					<label>ยืนยันรหัสผ่าน</label>
					<input type="text" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
					<small>{errorRepassword}</small>
				</div>
				<button type="submit">ลงทะเบียน</button>
			</form>
		</div>
	);
};

export default FormComponent;
