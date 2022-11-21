import Head from "next/head";
import { ImageGridMenu } from "../../components";

const analyticsOptions = [
  {
    title: "PlayStore",
    subTitle: "Check Playstore downloads & reviews",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "#",
  },
  {
    title: "AppStore",
    subTitle: "Check Appstore downloads & reviews",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "#",
  },
];

export default function Analytics() {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>

      <ImageGridMenu menus={analyticsOptions} />
    </>
  );
}
