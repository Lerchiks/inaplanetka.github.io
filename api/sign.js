import crypto from "crypto";

export default function handler(req, res) {
  const timestamp = Math.floor(Date.now() / 1000);
  
  // Можно подписать только для определённой папки
  const folder = "AlinaGallery"; 
  const params_to_sign = `folder=${folder}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  const signature = crypto.createHash("sha1").update(params_to_sign).digest("hex");

  res.json({
    timestamp,
    signature,
    folder,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME
  });
}
