```jsx
import "./globals.css";

export const metadata = {
  title: "HUSSAFA BOUTIQUE",
  description:
    "Luxury fashion, premium garments, jewellery and exclusive fragrances.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
