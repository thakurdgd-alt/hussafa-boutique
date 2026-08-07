import "./globals.css";

export const metadata = {
  title: "HUSSAFA BOUTIQUE",
  description: "Luxury Fashion, Jewellery & Fragrances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
