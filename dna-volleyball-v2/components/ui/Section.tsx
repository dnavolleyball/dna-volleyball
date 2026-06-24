type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: Props) {
  return (
    <section
      id={id}
      className="
        relative
        w-full
        px-6 md:px-12
        py-24 md:py-32
      "
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}