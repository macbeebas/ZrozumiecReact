function Span() {
  return <span>Strona kursu</span>;
}

export function Link() {
  const address = "http://zrozumiecreact.pl";
  return (
    <a href={address} target="_blank" rel="noopener noreferrer">
      <Span />
    </a>
  );
}
