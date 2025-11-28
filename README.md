# 📸 QR Code Scanner using Node.js

A simple and lightweight QR Code scanning API built using **Node.js + Express**.  
Upload an image containing a QR code, and the server decodes it instantly and returns the extracted text or URL.

---

## 🚀 Features
- Upload QR images using a simple HTML client
- Backend decodes QR using `jimp` + `qrcode-reader`
- Auto-redirects to the URL found in the QR
- Clean and minimal Node.js + Express implementation
- Temporary image files are auto-deleted after processing

---

## 🛠️ Tech Stack
- **Express** – API routing  
- **Multer** – file uploads  
- **Jimp** – image processing  
- **qrcode-reader** – QR decoding  
- **CORS** – allow browser → API communication

---

## 📂 Project Structure
