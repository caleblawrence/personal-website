interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  const { title } = props;
  return (
    <h2
      className="mb-0 text-6xl md:text-8xl font-bold tracking-tighter leading-tight"
      style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}
    >
      {title}
    </h2>
  );
}
