export default async function handler(req, res) {
  try {
    // Replace this with your ESP32 IP address
    const response = await fetch('http://192.168.1.110/data'); // ESP32 endpoint
    const data = await response.json(); // Get data from ESP32
    res.status(200).json(data); // Send data back to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from ESP32" }); // Error message
  }
}
