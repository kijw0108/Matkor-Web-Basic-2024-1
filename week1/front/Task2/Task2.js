let initial_num = prompt("Enter a number");

initial_num = parseInt(initial_num);
divide_7 = initial_num / 7;
num = initial_num;
cur = 0;
colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("egg");

cnt_dom.innerHTML = num;

const hitEgg = () => {
	num--;
	cnt_dom.innerHTML = num;
	if (num === 0) {
		alert("Success!");
	}
	if (initial_num - num >= divide_7 * (cur + 1)) {
		cur++;
		cnt_dom.style.color = colors[cur];
	}
};

egg_dom.addEventListener("click", hitEgg);
