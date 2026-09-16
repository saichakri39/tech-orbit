import qrcode

# Registration page URL
url = "https://techorbitaids.netlify.app/register.html"

# Create QR Code
qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Generate QR image
img = qr.make_image(
    fill_color="black",
    back_color="white"
)

# Save QR code
img.save("tech_orbit_registration_qr.png")

print("✓ QR Code created successfully!")
print("✓ Saved as: tech_orbit_registration_qr.png")