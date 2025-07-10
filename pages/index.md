---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Holynet VPN"
  text: "Modern, fast solution for virtual private network"
  tagline: "High-Performance VPN ⚡"
  image:
    src: assets/logo.svg
    alt: Holynet VPN Logo
    width: 180
    height: 180
  actions:
    - theme: brand
      text: What is Holynet VPN?
      link: /what-is
    - theme: alt
      text: Quickstart
      link: /quickstart
    - theme: alt
      text: GitHub
      link: https://github.com/holynet-zone

features:
  - icon: 🔒
    title: Dual Encryption
    details: "Choose between AES-GCM and ChaCha20-Poly1305 for optimal security-performance balance"
  - icon: 🌐
    title: Hybrid Transport
    details: "UDP for raw speed + WebSockets for firewall penetration. Best of both worlds!"
  - icon:
        light: assets/rust.svg
        dark: assets/rust-dark.svg
    title: Blazing Fast
    details: "Rust-powered core for minimal overhead and maximum throughput"
  - icon: 🔁
    title: Robust Reconnection
    details: "Automatically restores VPN session after network interruptions"
  - icon: 🦀
    title: Memory Safe
    details: "Rust foundation prevents whole classes of vulnerabilities"
  - icon: 📱
    title: Cross-Platform
    details: "Works everywhere: Windows, macOS, Linux, iOS, Android"
---

