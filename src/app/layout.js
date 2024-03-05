import "./globals.css";

export const metadata = {
  title: "Github Search",
  description: "Github search app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
