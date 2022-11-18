import Head from "next/head";
import { ImageGridMenu } from "../../components";

const moreOptions = [
  {
    title: "Roadmap",
    subTitle: "Check the current & future planned activities",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/more/roadmap",
  },
];

export default function More() {
  return (
    <>
      <Head>
        <title>More</title>
      </Head>

      <ImageGridMenu menus={moreOptions} />
    </>
  );
}
