import fetch from "node-fetch";

export default async function handler(req, res) {
  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const API_KEY = process.env.CLOUDINARY_API_KEY;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;
  const FOLDER = "AlinaGallery";

  try {
    const response = await fetch(
      `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${FOLDER}.json`
    );
    const data = await response.json();

    // вернем массив URL изображений
    const images = data.resources.map(img => img.secure_url);

    res.status(200).json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot fetch gallery from Cloudinary" });
  }
}
