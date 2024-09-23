function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}
function updateBirthdaySelect(bdaySelect, month, year) {
	let preSelectedValue = Number(bdaySelect.value);
	preSelectedValue = preSelectedValue > 0 ? preSelectedValue : 1;
	let maxDay = daysInMonth(Number(month) + 1, Number(year));
	let newChildren = [];
	for (var i = 1; i <= maxDay; i++) {
		option = document.createElement("option");
		option.setAttribute("value", `${i}`);
		option.innerText = i;
		newChildren.push(option);
	}
	bdaySelect.replaceChildren(...newChildren);
	if (maxDay < preSelectedValue) {
		bdaySelect.value = maxDay;
	} else {
		bdaySelect.value = preSelectedValue;
	}
}
function checkNotEmpty(target, wm) {
	if (target.value) {
		target.style.borderColor = "#0060df";
		wm.innerText = "";
        return true
	} else {
		target.style.borderColor = "red";
		wm.innerText = `No empty ${target.getAttribute('name')}!`;
	}
    return false
}
function checkEmail(target, wm) {
	if (!target.value) {
		target.style.borderColor = "red";
		wm.innerText = "No empty email/number!";
	} else if (
		target.valutarget.value.search(/[^\d\W]+/) > -1 &&
		!target.value.match(/(\w|\.)+@(\w|\.)+/)
	) {
		target.style.borderColor = "red";
		wm.innerText = "Wrong email format!";
	} else if (
		!target.value.match(/(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/)
	) {
		target.style.borderColor = "red";
		wm.innerText = "Wrong number format!";
	} else {
		target.style.borderColor = "#0060df";
		wm.innerText = "";
        return true
	}
    return false
}
function checkPassword(target, wm) {
	if (!target.value) {
		target.style.borderColor = "red";
		wm.innerText = "No empty password!";
	} else if (target.value.length < 8) {
		target.style.borderColor = "red";
		wm.innerText = "Password is too short!";
	} else if (
		!(target.value.search(/\d/) > -1 && target.value.search(/\W/) > -1 && target.value.search(/[^\W\d]/) > -1)
	) {
		target.style.borderColor = "red";
		wm.innerText ="Password must contain a number, a word and a non-number-or-word character";
	} else {
		target.style.borderColor = "#0060df";
		wm.innerText = "";
        return true
	}
    return false
}
function uncheckInput(target, wm) {
	target.style.borderColor = "#dddfe2";
	wm.innerText = "";
}
let bday = document.querySelector("select#birthday");
let bmonth = document.querySelector("select#birthmonth");
let byear = document.querySelector("select#birthyear");
var curYear = new Date().getFullYear();
updateBirthdaySelect(bday, bmonth.value, byear.value);
for (let i = 0; i > -200; i--) {
	option = document.createElement("option");
	option.setAttribute("value", `${i + curYear}`);
	option.innerText = i + curYear;
	byear.append(option);
}
bmonth.addEventListener("change", (e) => {
	updateBirthdaySelect(bday, bmonth.value, byear.value);
});
byear.addEventListener("change", (e) => {
	updateBirthdaySelect(bday, bmonth.value, byear.value);
});
let warner_main = document.getElementById("warner-main");
for (let i of document
	.getElementById("name-input")
	.getElementsByTagName("input")) {
	i.addEventListener("input", (e) => checkNotEmpty(e.target, warner_main));
	i.addEventListener("focus", (e) => checkNotEmpty(e.target, warner_main));
	i.addEventListener("blur", (e) => uncheckInput(e.target, warner_main));
}
{
	let i = document.getElementById("email-in");
	i.addEventListener("input", (e) => checkEmail(e.target, warner_main));
	i.addEventListener("focus", (e) => checkEmail(e.target, warner_main));
	i.addEventListener("blur", (e) => uncheckInput(e.target, warner_main));
}
{
	let i = document.getElementById("password-in");
	i.addEventListener("input", (e) => checkPassword(e.target, warner_main));
	i.addEventListener("focus", (e) => checkPassword(e.target, warner_main));
	i.addEventListener("blur", (e) => uncheckInput(e.target, warner_main));
}
document.getElementById("signup_form").addEventListener("submit", (e) => {
	// var formData = new FormData(e.target);
	// console.log(formData);
	// for (const [name, value] of formData.entries()) {
	// }
	e.preventDefault();
	let flag=true;
    flag&=checkNotEmpty(document.getElementById("first-name-in"), warner_main)
    flag&=checkNotEmpty(document.getElementById("last-name-in"), warner_main)
    flag&=checkEmail(document.getElementById("email-in"), warner_main)
    flag&=checkPassword(document.getElementById("password-in"), warner_main)
	if(!flag){
		warner_main.innerText="Please check your inputs."
	}
});
