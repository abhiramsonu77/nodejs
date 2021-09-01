const http = require("http");
const os = require("os");
const fs = require("fs");

http

    .createServer((req,res) => {
        
        const hostname = os.hostname();
        const platform = os.platform();
        const cpu = os.cpus();
        const arch = os.arch();
        
        array = [hostname, platform, cpu, arch];
        const data = JSON.stringify(array);
		fs.writeFileSync("array.json", data);
		fs.readFile("array.json", (err, data) => {
			if (err) {
				res.write("error");
			}
			res.write(data);
			res.end();
		});
	})
	.listen(5000, () => {
		console.log("server strated");
	});