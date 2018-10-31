# lshw - List hardware information
Node.js version of lshw, a tool to extract detailed information on the hardware configuration of the machine.

# Install
```bash
# Locally
npm i lshw

# Globally
npm i -g lshw
```

# Usage
```bash
# Locally
node_modules/.bin/lshw

# Globally
lshw
```

## Example output:
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
```