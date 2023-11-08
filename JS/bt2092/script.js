var usernameTag = document.getElementById('username_id')
var pwdTag = document.getElementById('pwd_id')

var dialogTag = document.getElementById('dialog-id')

function login() {
	let uname = usernameTag.value
	let password = pwdTag.value

	if(uname == "" || password == "") {
		alert('User Name | Password khong duoc de trong')
		return
	}

	// alert('Dang nhap thanh cong')
	dialogTag.style.display = "block"
}

function resetData() {
	usernameTag.value = ""
	pwdTag.value = ""
}

function closeDialog() {
	dialogTag.style.display = "none"
}