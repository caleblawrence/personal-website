interface Props {
  children: any
}
export default function Container(props: Props) {
  const { children } = props;
  return <div className="container mx-auto px-5">{children}</div>;
}
