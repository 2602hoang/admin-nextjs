export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="text-white bg-menu flex justify-center min-h-screen items-center w-full font-inter">
          {children}
        </div>
      </body>
    </html>
  );
}
