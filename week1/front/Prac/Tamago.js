let num = prompt("Enter a number");

num = parseInt(num);

const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("egg");

cnt_dom.innerHTML = num;

const hitEgg = () => {
	num--;
	cnt_dom.innerHTML = num;
	if (num === 0) {
		alert("Success!");
	}
};

egg_dom.addEventListener("click", hitEgg);
