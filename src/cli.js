"use-strict";

const Output = require("./output");

module.exports = {
    /**
     * CLI argument to print the module version
     */
    "--version": function(){
        return {
            description: "Print module version",
            default: Output.printVersion()
        }
    },
    /**
     * CLI argument to print the short hw configuration
     */
    "--short": function(){
        return {
            description: "Output hardware paths",
            default: Output.printShort()
        }
    },
    /**
     * CLI argument to print the help menu for user
     */
    "--help": function(){
        return {
            description: "Output hardware paths",
            default: Output.printHelp()
        }
    },
    /**
     * CLI argument to print the main hw configuration
     */
    print: function() {
        Output.print();
    }
}