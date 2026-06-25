type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative
        w-full
        px-6 md:px-12
        py-24 md:py-32
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}