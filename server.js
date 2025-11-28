import express from "express";
import multer from "multer";
import { Jimp } from "jimp";
import QrCode from "qrcode-reader";
import fs from "fs";
import cors from "cors";



const app = express();
app.use(cors()); // ← ADD THIS
const upload = multer({ dest: "uploads/" });


//route uploads image and scan qr
app.post("/scan", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "No file uploaded" });

        const img = await Jimp.read(fs.readFileSync(req.file.path));
        const qr = new QrCode();

        qr.callback = (err, value) => {
            fs.unlinkSync(req.file.path);
            if (err || !value) {
                return res.status(400).json({ error: "No QR code found" });
            }

            res.json({ message: "QR code scanned successfully", data: value.result });
        };

        qr.decode(img.bitmap);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process image" });
    }
});

app.listen(3000, () => {
    console.log("QR Scanner API running on http://localhost:3000");
})