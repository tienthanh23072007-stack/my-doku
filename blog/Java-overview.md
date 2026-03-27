---

title: Understanding Java Platform – Execution Flow & JVM Architecture
date: 2026-02-12
tags: [java, jvm, bytecode, jdk, jre, jit, execution-flow]
---

## 1. Java Platform Overview

Java is not just **a programming language**, but **a complete platform (Java Platform)**.
<!-- truncate -->

👉 When we say *"programming in Java"*, we are actually working with **3 core components**:

- **Java Language**
- **JVM (Java Virtual Machine)**
- **Ecosystem of libraries & tools**

### Core Objectives of Java

> **Write Once, Run Anywhere (WORA)**

Write code **once**, run it on:
- Windows
- Linux
- macOS  
… without **modifying the code**

---

## 2. Roles of JDK, JRE, JVM

Many Java learners **confuse these 3 concepts**, so they need to be clarified absolutely.

### 2.1 JVM – Java Virtual Machine

**What is JVM?**

- JVM is a **virtual machine**
- Runs **Java bytecode**
- Acts as **an intermediary between Java and the operating system**

📌 JVM:
- Does not understand `.java`
- Does not understand `.exe`
- **Only understands `.class` (bytecode)**

👉 Each operating system has its own **JVM**, but:
- Bytecode is **the same**

---

### 2.2 JRE – Java Runtime Environment

**JRE includes:**

- JVM
- Core Java Libraries (java.lang, java.util, ...)
- Runtime configuration files

👉 JRE is used to:
- **Run Java programs**
- ❌ Not for writing or compiling code

📌 If the machine only has JRE:
- Can run `.class`
- ❌ Cannot compile `.java`

---

### 2.3 JDK – Java Development Kit

**JDK = JRE + Development Tools**

Includes:
- `javac` (compiler)
- `java` (launcher)
- `javadoc`, `jdb`, ...

👉 JDK is used to:
- Write code
- Compile
- Run
- Debug

📌 When installing Java for programming:
➡️ **ALWAYS need JDK**

---

### 2.4 Overall Relationship
JDK <br />
├── JRE <br />
│   ├── JVM <br />
│   └── Java Core Libraries <br />
└── Development Tools <br />

---
## 3. Relationship between Java Language and Java Platform
### Java Language
- Syntax and keywords
- Data types
- OOP (class, object, inheritance)
- Source code files `.java`

### Java Platform
- JVM (Java Virtual Machine)
- ClassLoader Subsystem
- Runtime Data Areas
- Execution Engine & Garbage Collector

**Java Language is just the surface**  
**Java Platform is what determines how the program runs**

---

## 4. Java Execution Flow

When you run a Java program, **JVM does not execute the `.java` file directly**.

### General Flow

IDE  <br />
↓ (Save)  <br />
`Hello.java` (Hard Drive) <br /> 
↓ (Compile)  <br />
`javac Hello.java`  <br />
↓  <br />
`Hello.class` (Bytecode)  <br />
↓  <br />
JVM (RAM)  <br />
↓  <br />
OS  <br />
↓  <br />
CPU Execution  <br />

---

## 5. Compile-time and Runtime in Java

### 5.1 Compile-time

**Occurs when running:**

```bash
javac Hello.java