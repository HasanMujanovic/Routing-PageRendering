export default function NewsDefaultLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
