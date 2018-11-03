"use-strict";

const Os = require("os");
const Helpers = require("./helpers");

module.exports = {
    /**
     * Return OS architecture information
     * @see https://nodejs.org/api/os.html#os_os_arch
     */
    arch: function () {
        return {
			arch: Os.arch(),
			endian: Os.endianness(),
			platform: Os.platform(),
			release: Os.release(),
			type: Os.type()
		}
    },
    /**
     * Return the OS hostname
     * @see https://nodejs.org/api/os.html#os_os_hostname
     */
    hostname: function () {
        return Os.hostname();
    },
    /**
     * Return array containing information about each logical CPU
     * @see https://nodejs.org/api/os.html#os_os_cpus
     */
    cpu: function () {
        return {
            product: Os.cpus()[0].model,
            vendor: Os.cpus()[0].model.split(" ")[0],
            width: this.arch().arch
        };
    },
    /**
     * Return the total amount of system memory
     * @see https://nodejs.org/api/os.html#os_os_totalmem
     */
    memory: function () {
        return Helpers.formatBytes( Os.totalmem() );
    },
    /**
     * Return network interface information
     * @see https://nodejs.org/api/os.html#os_os_networkinterfaces
     */
    network: function() {
        return {
            interfaces: Os.networkInterfaces()
        }
    }
}