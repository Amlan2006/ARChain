# ARChain - JavaScript Blockchain Implementation

A simple blockchain and cryptocurrency implementation built from scratch using JavaScript as a learning project.

## Features

- **Block Creation**: Create blocks with timestamp, hash, previous hash, and data
- **Genesis Block**: Hardcoded first block to start the chain
- **Block Mining**: Mine new blocks with SHA256 hashing
- **Chain Validation**: Maintain blockchain integrity through hash linking
- **Proof of Work**: Basic mining mechanism for block creation

## Project Structure

```
archain/
├── block.js          # Block class implementation
├── blockchain.js     # Blockchain class implementation
├── block.test.js     # Unit tests for Block class
├── dev-test.js       # Development testing script
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Usage

### Creating a Blockchain

```javascript
const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

// Add blocks to the chain
blockchain.addBlock('First transaction data');
blockchain.addBlock('Second transaction data');

console.log(blockchain.chain);
```

### Creating Individual Blocks

```javascript
const Block = require('./block');

// Create genesis block
const genesis = Block.genesis();

// Mine a new block
const newBlock = Block.mineBlock(genesis, 'Some data');
console.log(newBlock.toString());
```

## API Reference

### Block Class

#### Constructor
- `Block(timestamp, lastHash, hash, data)` - Creates a new block instance

#### Static Methods
- `Block.genesis()` - Returns the genesis block
- `Block.mineBlock(lastBlock, data)` - Mines a new block based on the last block
- `Block.hash(timestamp, lastHash, data)` - Generates SHA256 hash for block

#### Instance Methods
- `toString()` - Returns formatted string representation of the block

### Blockchain Class

#### Constructor
- `Blockchain()` - Initializes blockchain with genesis block

#### Methods
- `addBlock(data)` - Adds a new block to the chain and returns it

## Development

### Running Tests
```bash
npm test
```

### Development Testing
```bash
npm run dev-test
```

## Dependencies

- **crypto-js**: SHA256 hashing functionality
- **jest**: Testing framework (dev dependency)
- **nodemon**: Development server with auto-reload (dev dependency)

## Technical Details

- **Hashing Algorithm**: SHA256
- **Block Structure**: Timestamp, Previous Hash, Current Hash, Data
- **Chain Validation**: Each block references the hash of the previous block
- **Genesis Block**: Hardcoded first block with fixed values

## Future Enhancements

- [ ] Proof of Work difficulty adjustment
- [ ] Transaction system with digital signatures
- [ ] Wallet functionality
- [ ] Network/P2P communication
- [ ] Mining rewards
- [ ] Chain validation methods
- [ ] Merkle tree implementation
- [ ] REST API endpoints

## License

ISC

## Contributing

This is a learning project. Feel free to fork and experiment!