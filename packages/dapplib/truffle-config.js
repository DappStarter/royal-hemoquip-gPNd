require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success story crawl remember until install entire army gather'; 
let testAccounts = [
"0xc47ae0184c779e55f6c5a7d6cca1e88797a6ad34fce7fc8d75eb8d5012535d32",
"0x47cbd63757a392dd7ad1529246ea93ae7485a4d0b810332a23e01a82bf1dfc23",
"0x85683d79c306e7eb2fa1a47e866f2a11fd81f90f14e890b2cf3426740b65dba5",
"0xe48bde2fe57bd17fd16a9b0265e22f2f9d8658797a1d2491f4e63e3393e0a14d",
"0x2fb028a05d5a8eaf686c9c443d4d53fae20c307338662416bec128ce1ca1d1c9",
"0xa650d18ac7f2bae12b108a7dd0dfb0aca578a71620586a31accfe5185efcfaee",
"0x3a2631aca773af94a1a13f6697ec8f37066f8bb0326a995c975f73f051b482be",
"0x3648c73125bc7ec4c7bfd917e79c60ee1230e15d5632c3e1ddfe501f61c2efba",
"0xec6ed588a9154e52efa4fdb62667b3f2c75518b083428f638316ccf3f731c3d2",
"0x9b9162bdbccafe8a794b11dd3fdb96d4dd228093038c14141a4b6e8406505dc5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

