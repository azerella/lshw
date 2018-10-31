#! /usr/bin/env node

"use-strict";

const Cli = require("./cli");

/**
 * @author - Adam Zerella < adam.zerella@gmail.com >
 * Launch point of node application, looks at first CLI argument passed to it
 * e.g node this_module --version
 */
switch (process.argv[2]) {
	case "--version":
		Cli["--version"]().default;
		break;
	case "-version":
		Cli["--version"]().default;
		break;
	case "--short":
		Cli["--short"]().default;
		break;
	case "-short":
		Cli["--short"]().default;
		break;
	case "-s":
		Cli["--short"]().default;
		break;
	case "--help":
		Cli["--help"]().default;
		break;
	case "-help":
		Cli["--help"]().default;
		break;
	default:
		Cli.print()
		break;
}