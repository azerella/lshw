"use-strict";

module.exports = {
    /**
     * Return a human readable size format, given a number of bytes.
     * @see https://stackoverflow.com/a/23625419
     * @param { Integer } bytes 
     */
    formatBytes: function ( bytes ) {
        if ( bytes < 1024 ) return bytes + " Bytes";
        else if ( bytes < 1048576 ) return ( bytes / 1024 ).toFixed( 2 ) + " KB";
        else if ( bytes < 1073741824 ) return ( bytes / 1048576 ).toFixed( 2 ) + " MB";
        else return ( bytes / 1073741824 ).toFixed( 2 ) + " GB";
    }
}
