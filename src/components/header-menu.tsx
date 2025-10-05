
export default function HeaderMenu({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex items-center justify-end p-2">
      {children}
  </div>;
}