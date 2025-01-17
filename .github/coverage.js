const fs = require("fs");

let json = JSON.parse(
  fs
    .readFileSync("./code/backend/coverage/coverage-summary.json")
    .toString("utf-8")
);

const pct = Math.round(json["total"]["lines"]["pct"] * 100) / 100;

let color = "";

if (pct > 80) {
  color = "brightgreen";
} else if (pct > 60) {
  color = "green";
} else if (pct > 50) {
  color = "yellow";
} else if (pct > 30) {
  color = "orange";
} else {
  color = "red";
}

let str = fs.readFileSync("./README.md").toString("utf-8");
str = str.replace(
  /<!-- Begin Code Coverage[^]*End Code Coverage -->/gm,
  `<!-- Begin Code Coverage -->\n\
\n\
![Code Coverage](https://img.shields.io/badge/coverage-${pct}%25-${color})\n\
\n\
<!-- End Code Coverage -->`
);

fs.writeFileSync("./README.md", str);
