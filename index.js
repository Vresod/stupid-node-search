import fs from "fs";

if (!fs.existsSync("sites.json")) {
	fs.promises.writeFile("sites.json", "https://raw.githubusercontent.com/Vresod/stupid-node-search/master/sites.json")
}