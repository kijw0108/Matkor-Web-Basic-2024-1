let initial_num = prompt("Enter a number");

initial_num = parseInt(initial_num);
num = initial_num;

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

for (let i = 1; i <= initial_num; i++) {
	setTimeout(() => {
		egg_dom.click();
	}, 500 * i);
}
