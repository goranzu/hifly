import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Hello</p>
      <Link href="/test">Next</Link>
    </div>
  );
};

export default Home;
