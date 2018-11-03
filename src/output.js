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
        *-network`)
        Object.entries(core.network().interfaces).forEach( item => {
          console.info(`\t  Description: Network interface
          Logical Name: ${item[0]}
          Serial: ${item[1][0].mac}
          Configuration: ip=${item[1][0].address}`)
        });
    },
    /**
     * Print the module version
     */
    printVersion() {
        console.info(`lshw ${packageJson.version}`);
    },
    /**
     * Print the short hw configuration
     */
    printShort: function() {
		console.info(`H/W path\tDevice\tClass\tDescription\n${'='.repeat(43)}
		\n/\t\ttodo\ttodo\ttodo
		`);
    },
    /**
     * Print the help menu
     */
    printHelp: function() {
		console.info(`Usage: lshw [ options ] [ --short | --version ]
		lshw --short\nOptions:
		-V, --version\t\tOutput lshw version
		-s, --short\t\tvOutput summarised hw configuration as JSON
		-html, --html\t\tOutput hw configuration as HTML
		-json, --json\t\tOutput hw configuration as JSON`);
	},
    /**
     * Print the main hw configuration as HTML
     */
    printHTML: function() {
		console.info(`<html><h1>TODO</h1></html>`);
	}
	,
    /**
     * Print the main hw configuration as JSON
     */
    printJSON: function() {
		console.info(`{}`);
    }
}

