# lshw - List hardware

> 💻 Return the hardware configuration of the machine, inspired by [lshw](https://www.unix.com/man-page/linux/1/lshw/).

I'm aspiring to make open-source my full-time work. If you like the work that I do, please consider supporting me.

[![Coffee][badge_coffee_donate]](https://www.buymeacoffee.com/adamzerella)
[![PayPal][badge_paypal_donate]](https://paypal.me/adamzerella)

## Install
```bash
npm i -g lshw
```

## Usage

This project lacks many of the features from the original `lshw` tool. Additional issues arise when the [Node.js os](https://nodejs.org/api/os.html) library doesn't provide low-level support for things like PCI devices or motherboard bus information.

## CLI

```bash
$ lshw

# Usage: lshw [ options ] [ --version | --html | --json]
#                 lshw
# Options:
#         -V, --version           Output lshw version
#         -html, --html           Output hw configuration as HTML
#         -json, --json           Output hw configuration as JSON
```

### Yields:
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

## Contribute

Don't be scared raise an issue or a pull request! Any contributions, no matter how big or small will land your picture here.

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="64" height="64" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>

[badge_coffee_donate]: https://adamzerella.com/badges/coffee.svg
[badge_patreon_donate]: https://adamzerella.com/badges/patreon.svg
[badge_paypal_donate]: https://adamzerella.com/badges/paypal.svg