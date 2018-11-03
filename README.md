# lshw - List hardware
**Node.js** version of [lshw](https://www.unix.com/man-page/linux/1/lshw/), a tool to extract detailed information on the hardware configuration of the machine.

[![CircleCI](https://circleci.com/gh/adamzerella/lshw.svg?style=svg)](https://circleci.com/gh/adamzerella/lshw)
[![npm version](https://badge.fury.io/js/lshw.svg)](https://badge.fury.io/js/lshw)
[![GitHub stars](https://img.shields.io/github/stars/adamzerella/lshw.svg)](https://github.com/adamzerella/lshw/stargazers)
[![GitHub license](https://img.shields.io/github/license/adamzerella/lshw.svg)](https://github.com/adamzerella/lshw/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/adamzerella/lshw.svg)](https://github.com/adamzerella/lshw/issues)

This project aims to be as authentic as possible when it comes to the usage of the original [lshw](https://www.unix.com/man-page/linux/1/lshw/). While aiming to be authentic, features like HTML output have been improved for HTML5 compatibility.

> **NOTE**: This project lacks many of the features from the original `lshw` tool. Additional issues arise when the Node.js `os` library doesn't provide low-level support for things like PCI devices or motherboard bus information.

# Prerequisites
This project preferences LTS releases:
- [Node.js >= 10.13.0](https://nodejs.org/dist/v10.13.0)

# Install
```bash
npm i -g lshw
```

# Usage
```bash
$ lshw

# Usage: lshw [ options ] [ --version | --html | --json]
#                 lshw
# Options:
#         -V, --version           Output lshw version
#         -html, --html           Output hw configuration as HTML
#         -json, --json           Output hw configuration as JSON
```

## Output:
```bash
MY-PC
          Width: x64
        *-core
          Description: Motherboard
            *-memory
                Description: System memory
                Size: 8.00 GB
            *-cpu
                Product: Intel(R) Core(TM) i7-5557U CPU @ 3.10GHz
                Vendor: Intel(R)
                Width: x64
        *-network
	  Description: Network interface
          Logical Name: lo0
          Serial: 00:00:00:00:00:00
          Configuration: ip=127.0.0.1
...
```

# Contributors
<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
</div>