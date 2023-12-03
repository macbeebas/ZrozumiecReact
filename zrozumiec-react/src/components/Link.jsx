// export function Link(props) {
// const { text, shouldOpenNewTab } = props;
//   To to samo co
//   const text = props.text;
//   const shouldOpenNewTab = props.shouldOpenNewTab;
// powyżej wersja z tłumaczenia a poniżej docelowa
export function Link({ text, shouldOpenNewTab }) {
  const address = "https://zrozumiecreact.pl";
  const target = shouldOpenNewTab ? "_blank" : "";
  const rel = shouldOpenNewTab ? "noopener noreferrer" : "";
  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
