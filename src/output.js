"use-strict";

const core = require("./core");
const packageJson = require("../package.json");

module.exports = {
    /**
     * Print the main hw configuration
     */
    print: function () {
        console.info(
        `${core.hostname()}
          Width: ${core.arch()}\t
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
        return console.info(packageJson.version);
    },
    /**
     * Print the short hw configuration
     */
    printShort: function() {
        return console.info("TODO short");
    },
    /**
     * Print the help menu
     */
    printHelp: function() {
        return console.info("TODO help");
    }
}

