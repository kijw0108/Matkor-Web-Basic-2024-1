var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/:id", function (req, res, next) {
	const id = req.params.id;
	const id_to_name = {
		1: "Alice",
		2: "Bob",
		3: "Charlie",
	};
	if (id === undefined) {
		res.send("Please provide an id");
	} else if (id in id_to_name) {
		res.status(200).send(id_to_name[id]);
	} else {
		res.status(404).send("User not found");
	}
});

router.get("/:id", function (req, res, next) {
	const id = req.params.id;
	const name = req.query.name;
	const id_to_name = {
		1: "Alice",
		2: "Bob",
		3: "Charlie",
	};
	if (id === undefined) {
		res.send("Please provide an id");
	} else if (id in id_to_name) {
		if (id_to_name[id] === name) {
			res.status(200).json({ id: id, name: name });
		} else {
			res.status(401).send("Access denied");
		}
	} else {
		res.status(404).send("User not found");
	}
});

module.exports = router;

