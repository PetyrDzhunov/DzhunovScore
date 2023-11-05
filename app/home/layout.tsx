export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex min-h-screen'>{children}</div>;
}
