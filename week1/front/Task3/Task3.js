let num = prompt("Enter a number");

num1 = parseInt(num);
num2 = parseInt(num);

const cnt1_dom = document.getElementById("cnt1");
const egg1_dom = document.getElementById("egg1");

const cnt2_dom = document.getElementById("cnt2");
const egg2_dom = document.getElementById("egg2");

cnt1_dom.innerHTML = num1;
cnt2_dom.innerHTML = num2;

const hitEgg1 = () => {
	num1--;
	cnt1_dom.innerHTML = num1;
	if (num1 === 0) {
		alert("Success!");
	}
};

const hitEgg2 = () => {
	num2--;
	cnt2_dom.innerHTML = num2;
	if (num2 === 0) {
		alert("Success!");
	}
};

egg1_dom.addEventListener("click", hitEgg1);
egg2_dom.addEventListener("click", hitEgg2);
