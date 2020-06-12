import Meta from 'components/meta';

interface Props {
  preview?: any,
  children: any
}
export default function Layout(props: Props) {
  const { preview, children } = props;
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
