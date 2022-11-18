import Head from "next/head";
import { ImageGridMenu } from "../components/index";

const marketingOption = [
  {
    title: "Notification",
    subTitle: "Send Notification to all user",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "#",
  },
  {
    title: "Banner",
    subTitle: "Manage Banners for the app",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "#",
  },
];

export default function Marketing() {
  return (
    <>
      <Head>
        <title>Marketing</title>
      </Head>

      <ImageGridMenu menus={marketingOption} />
    </>
  );
}
