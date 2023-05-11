interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
     
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden pt-12">
          {children}
        </main>
      </div>
    </div>
  );
}
