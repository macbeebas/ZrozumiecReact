export function Link(props) {
  console.log(props);
  const address = "https://zrozumiecreact.pl";
  const target = props.shouldOpenNewTab ? "_blank" : "";
  const rel = props.shouldOpenNewTab ? "noopener noreferrer" : "";
  return (
    <a href={address} target={target} rel={rel}>
      {props.text}
    </a>
  );
}
