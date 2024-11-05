type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div>
      <div className="container mx-auto px-3">{children}</div>
    </div>
  );
}
