class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    }
    toString(){
        return `Block - 
        timestamp: ${this.timestamp}
        lastHash : ${this.lastHash.substring(0,10)}
        hash     : ${this.hash.substring(0,10)}
        data     : ${this.data}`
    }

    static genesis(){
        return new this('Genesis Time','-----','gus78ec9e',[])
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';

        return new this(timestamp,lastHash,hash,data)
    }
}
module.exports = Block;