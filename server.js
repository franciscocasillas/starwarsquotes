console.log("May Node be with you");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb+srv://maxel:S0m3t1m35M@cluster0.squpb0q.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
	console.log("listening on 3000");
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
	console.log(req.body);
});

async function run() {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
