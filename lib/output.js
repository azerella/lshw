"use-strict";

const core = require("./core");
const packageJson = require("../package.json");

module.exports = {
    /**
     * Print the main hw configuration
     */
    print: function () {
    	console.info(`${core.hostname()}
	  Description: Computer
	  Width: ${core.arch().arch}\t
        *-core\t
          Description: Motherboard\t
            *-memory\t
                Description: System memory
                Size: ${core.memory()}
            *-cpu\t
                Product: ${core.cpu().product}
                Vendor: ${core.cpu().vendor}
                Width: ${core.cpu().width}
		*-network\t
		${Object.entries(core.network().interfaces).map( item => {
			return `    Description: Network interface
		    Logical Name: ${item[0]}
		    Serial: ${item[1][0].mac}
		    Configuration: ip=${item[1][0].address}\n\t\t`}).join("")}`);
    },
    /**
     * Print the module version
     */
    printVersion() {
        console.info(`lshw ${packageJson.version}`);
    },
    /**
     * Print the help menu
     */
    printHelp: function() {
		console.info(`Usage: lshw [ options ] [ --version | --html | --json]
		lshw\nOptions:
	-V, --version\t\tOutput lshw version
	-html, --html\t\tOutput hw configuration as HTML
	-json, --json\t\tOutput hw configuration as JSON`);
	},
    /**
     * Print the main hw configuration as HTML
     */
    printHTML: function() {
		console.info(`<!DOCTYPE html>
		<head>
			<title>${core.hostname()}</title>
			<style>
				body { margin: 0; padding: 1rem;}
				table { width: 100%; margin-bottom: 1rem; text-align:left; }
				caption { text-decoration: underline; text-align:left; }
				tr:nth-child(even) {background-color: #f2f2f2;}
			</style>
		</head>
		<body>
			<main>
				<table>
					<caption>Computer</caption>
					<tbody>	
						<tr>
							<th>Width</th>
						</tr>
						<tr>
							<td>${core.arch().arch}</td>
						</tr>
					</tbody>
				</table>
				<table>
					<caption>Motherboard</caption>
					<tbody>
					<tr>
						<th>Description</th>
					</tr>
					<tr>
						<td>N/A</td>
					</tr>
				</table>
				<table>
					<caption>Memory</caption>
					<tbody>
					<tr>
						<th>Size</th>
					</tr>
					<tr>
						<td>${core.memory()}</td>
					</tr>
					</tbody>
				</table>
				<table>
					<caption>CPU</caption>
					<tbody>
						<tr>
							<th>Product</th>
							<th>Vendor</th>
							<th>Width</th>
						</tr>
						<tr>
							<td>${core.cpu().product}</td>
							<td>${core.cpu().vendor}</td>
							<td>${core.cpu().width}</td>
						</tr>
					</tbody>
				</table>
				<table>
					<tbody>
						<caption>Network</caption>
					<tbody>
						<tr>
							<th>Description</th>
							<th>Logical Name</th>
							<th>Serial</th>
							<th>Configuration</th>
						</tr>
						<tr>
						${Object.entries(core.network().interfaces).map( item => {
							return `<td>Network interface</td>
							<td>${item[0]}</td>
							<td>${item[1][0].mac}</td>
							<td>ip=${item[1][0].address}</td></tr>\n\t\t\t\t\t\t\t`
						}).join("")}
					</tbody>
				</table>
			</main>
		</body>\n</html>`);
	},
    /**
     * Print the main hw configuration as JSON
     */
    printJSON: function() {
		console.info(`{ 
	"description": "Computer", 
	"width": "${core.arch().arch}",
	"children": [ 
		{ 
			"description": "Motherboard" 
		},
		{ 
			"description": "Memory", 
			"size": "${core.memory()}"
		},
		{ 
			"description": "CPU",
			"product": "${core.cpu().product}",
			"vendor": "${core.cpu().vendor}",
			"width": "${core.cpu().width}"
		},
		{ 
			"network": [
				${Object.entries(core.network().interfaces).map( item => {
				return `{ 
					"description": "Network interface",
					"logical-name": "${item[0]}",
					"serial": "${item[1][0].mac}",
					"configuration": "ip=${item[1][0].address}"
				},\n\t\t\t\t`}).join("")}
			]
		}
	]
}`);
    }
}

