import { compile } from "xdm";

export default function TestPage() {
  return <h1>Test</h1>;
}

export async function getStaticProps() {
  await compile("Test");

  return { props: {} };
}
