import qrcode

url = "https://tech-orbit-aids.netlify.app/register.html"

img = qrcode.make(url)

img.save("tech_orbit_registration_qr.png")

print("QR code created successfully!")
print("URL:", url)