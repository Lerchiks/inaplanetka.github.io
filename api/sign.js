import crypto from "crypto";

export default function handler(req, res) {
    console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? 'OK' : 'MISSING');
    console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? 'OK' : 'MISSING');
    console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? 'OK' : 'MISSING');
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "AlinaGallery";

  // проверка переменных окружения
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET || !process.env.CLOUDINARY_CLOUD_NAME) {
    return res.status(500).json({ error: "Missing Cloudinary environment variables" });
  }

  // формируем строку для подписи
  const params_to_sign = `folder=${folder}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  const signature = crypto.createHash("sha1").update(params_to_sign).digest("hex");

  res.status(200).json({
    timestamp,
    signature,
    folder,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY  // вот этот параметр был упущен
  });
}

