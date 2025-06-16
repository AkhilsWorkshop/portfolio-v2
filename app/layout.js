import "./globals.css";

export const metadata = {
  title: "Akhil Harikumar",
  description: "Created using NextJS 15 and Tailwind CSS 4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
