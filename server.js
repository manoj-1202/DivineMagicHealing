const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route to handle booking submission
app.post("/book", async (req, res) => {
  const { name, email, phone, item } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !item || !item.title || !item.category) {
    console.error("Incomplete booking data:", req.body);
    return res.status(400).json({ message: "Incomplete booking data" });
  }
  if (item.type === "service" && !item.duration) {
    console.error("Duration missing for service booking:", req.body);
    return res.status(400).json({ message: "Duration is required for service bookings" });
  }
  if (item.type === "product" && !item.price) {
    console.error("Price missing for product booking:", req.body);
    return res.status(400).json({ message: "Price is required for product bookings" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ttsapplications2025@gmail.com", // Your Gmail ID
        pass: "djor ksrg pkzt zznd", // Your App Password
      },
    });

    // Customize email content based on item type
    let detailsContent;
    if (item.type === "service") {
      detailsContent = `
        <h3>Booking Details:</h3>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
          <tr><td><strong>Type</strong></td><td>${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td></tr>
          <tr><td><strong>Title</strong></td><td>${item.title}</td></tr>
          <tr><td><strong>Category</strong></td><td>${item.category}</td></tr>
          <tr><td><strong>Duration</strong></td><td>${item.duration}</td></tr>
        </table>
      `;
    } else {
      // For course, healing, product
      const totalAmount = item.price ? `₹${Number(item.price).toFixed(2)}` : "To be confirmed";
      detailsContent = `
        <h3>Booking Details:</h3>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
          <tr><td><strong>Type</strong></td><td>${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td></tr>
          <tr><td><strong>Title</strong></td><td>${item.title}</td></tr>
          <tr><td><strong>Category</strong></td><td>${item.category}</td></tr>
         <tr><td><strong>Total Amount</strong></td><td>${totalAmount}</td></tr>
        </table>
      `;
    }

    const htmlContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${detailsContent}
    `;

    const mailOptions = {
      from: `"Booking Request" <${email}>`,
      to: "manojpolevault1202@gmail.com",
      subject: `New ${item.type.charAt(0).toUpperCase() + item.type.slice(1)} Booking Request`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Booking email sent successfully for:", item.title);
    res.status(200).json({ message: "Booking request sent successfully!" });
  } catch (error) {
    console.error("Error sending booking email:", error);
    res.status(500).json({ message: "Failed to send booking email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});