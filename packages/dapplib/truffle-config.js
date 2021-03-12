require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note situate coach hockey argue orange text'; 
let testAccounts = [
"0xb5aa27905266b3d831cb9bb52bef3ffd94688f58ec06e28c22106f929a74cb9d",
"0xe0d72e2ef44ac97b59810e6770e87594c043fa0b33fa6d3076f14632c06febae",
"0xcdddd071bdad11dbbede5326c6e1bb5f975da04d4f42317f00e081ee631fbde3",
"0x56f0543139258279ae34d6df9e326bb65c3a9fa80656de349814bfcf04133018",
"0x897973e8ed2fe2d4ec84a92544e2b0fe31b371cd95d623905aed1a91d2cc4a53",
"0x9863a598018e174278280a5e2df400829c1676a4802aabfb60029a6514f55f66",
"0x74a120dc8244ae8dbfea8f75d489664bd5b21b64b1e96ac5b2b0c68920f9346d",
"0x5bbd6f3a469191a5087d22b4ab410e6ef47170d7016e7a3e033e5760858d22c2",
"0x0a3814de05d12343e596c6ac54b526d1ed6f4e3780e614cd58ac604ceea7eb96",
"0x7dc4d611deb75555c1bf35ef48ad3d993a2d51043ceed012f95587b116437919"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
