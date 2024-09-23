document.querySelector("#navbar-top-item-left > .box-title").innerText =
	"Đại học Bách Khoa Hà Nội";
document.querySelector("#navbar-top-item-left > .box-des").innerText =
	"Cổng thông tin sinh viên ";
document.querySelector(
	"#navbar-top-item-left > .box-icon-container > img"
).src = "img/hust.png";
document.querySelector("#navbar-top-item-right > .box-title").innerText =
	"Xin chào";
document.querySelector("#navbar-top-item-right > .box-des").innerText =
	"Bạn sinh viên năm nhất".toUpperCase();
document.querySelector(
	"#navbar-top-item-right > .box-icon-container > img"
).src = "img/ctsv.png";
document.querySelector("#navbar-current-path").innerText = "CTSV / Hồ sơ";

function tabOnClick(event,srcTab,id) {
    if(!srcTab){
        return
    }
	var i, tabcontent, tablinks;
	tabcontent = document.querySelectorAll(
		srcTab+ " > .card-body > div"
	);

	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.querySelectorAll(
		srcTab+" > .navbar-list > ul > li > a"
	);
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(/ *active */, "");
	}
	event.currentTarget.className += " active";
    const toDisplay=document.getElementById(id);
    if(toDisplay){
        toDisplay.style.display = "block";
    }
}
