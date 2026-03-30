---
title: Blockchain & Web3 – Guide from Basics to Practice
description: Explaining Blockchain, Web3, Smart Contracts, and Web3 Wallets in an Easy-to-Understand Way for Beginners
---

## 📌 Introduction

Blockchain and Web3 are core technologies of the new generation of the Internet.  
If Web2 helps users **interact and create content**, then Web3 aims for a bigger goal:  
👉 **giving users ownership of data and digital assets**.

This article is designed for **beginners**, helping you:
- Understand what Blockchain is
- Understand how Web3 differs from Web2
- Know how Smart Contracts work
- Get an overview before diving deeper

📊 **Illustrative slide for the entire lesson:**  
👉 [Blockchain & Web3 – Canva](https://www.canva.com/design/DAHAWicpH1w/pfiXZRFKgXGG2dhy8E4q_g/edit?utm_content=DAHAWicpH1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 1️⃣ What is Blockchain?

Blockchain (blockchain) is a **distributed database**, where data is:
- Recorded into **Blocks**
- Blocks are **linked together through encryption**
- Data that has been recorded cannot be modified

### 🔗 Key Features of Blockchain
- **Decentralized**: No central server
- **Transparent**: Anyone can verify transactions
- **Immutable**: Recorded data is almost impossible to delete

📌 Example:
> When you transfer money on the blockchain, that transaction will be recorded permanently and everyone can check it.

---

## 2️⃣ Basic Structure of Blockchain & Web3

A Web3 ecosystem usually consists of the following components:

### 🔹 Block
- Contains transaction data
- Has a hash of the previous block

### 🔹 Hash
- Is an encrypted string representing the data
- Changing just 1 character → hash changes completely

### 🔹 Node
- Computers participating in the blockchain network
- Each node stores a copy of the data

### 🔹 Wallet (Web3 Wallet)
- Represents the **digital identity** of the user
- Stores private key
- Examples: MetaMask, Trust Wallet

📊 **Illustrative slide for the structure section:**  
👉 [View on Canva](https://www.canva.com/design/DAHAWicpH1w/pfiXZRFKgXGG2dhy8E4q_g/edit?utm_content=DAHAWicpH1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 3️⃣ What is a Smart Contract?

A Smart Contract is:
> **A program that runs automatically on the blockchain**, without intermediaries.

### 🧠 Features
- Automatically executes
- Cannot be edited after deployment
- Public & transparent

### ✍️ Simple Smart Contract Example (Solidity)

```solidity
pragma solidity ^0.8.0;

contract HelloWeb3 {
    function hello() public pure returns(string memory) {
        return "Hello Web3!";
    }
}