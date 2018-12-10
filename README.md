# Bytes.io logo contest proof

Original contest: https://medium.com/bytes-io/guess-where-our-logo-comes-from-d79191cac414

We created a hash of the answer and stored it on the blockchain. Even we can’t change it.

To state it in a more technical way, the SHA-256 of the answer:
```
e91b75d0b1e954dc5b53f11461224125821739424b4e0da12d3c4151dbfcfe37
```
is in the data part of [this Ethereum transaction](https://etherscan.io/tx/0xdec3ec51b8308f40b8672a5f07dc97311bd695eaa1efa6259e5a3ce0b45f8113) (block height "6726985").

Since the game has ended with a winner. Here is the proof to get the hash from the image source.
[![logo-source.jpg](https://raw.githubusercontent.com/bytes-io/bytes.io-logo-contest-proof/master/logo-source.jpg)](https://raw.githubusercontent.com/bytes-io/bytes.io-logo-contest-proof/master/logo-source.jpg)

```
npm install
npm start
```

This will give you the hash posted during the launch of the game

```
{
  hash: 'e91b75d0b1e954dc5b53f11461224125821739424b4e0da12d3c4151dbfcfe37'
}
```
