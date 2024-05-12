export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center jutify-center w-full h-full">
      {children}
    </div>
  );
}
