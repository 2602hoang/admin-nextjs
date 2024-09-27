export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="text-white bg-brown flex justify-center h-screen items-center w-full font-inter">
          {children}
        </div>
      </body>
    </html>
  );
}
