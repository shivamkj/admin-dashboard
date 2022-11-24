import Head from "next/head";
import { ImageGridMenu } from "../../components";

const supportOption = [
  {
    title: "Cricket",
    subTitle: "See all Cricket Matches",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/matches?gameType=0",
  },
  {
    title: "Soccer",
    subTitle: "See all Soccer Matches",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/matches?gameType=1",
  },
  {
    title: "Teams",
    subTitle: "See all Teams (Soccer & Cricker)",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/teams",
  },
  {
    title: "Tournaments",
    subTitle: "See all Tournaments (Soccer & Cricker)",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/tournaments",
  },
  {
    title: "Users",
    subTitle: "See all Users",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/users",
  },
  {
    title: "Posts",
    subTitle: "See all Posts",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/posts",
  },
];

const appRequests = [
  {
    title: "Delete Requests",
    subTitle: "See all Delete Request",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/delete-requests",
  },
];

export default function Support() {
  return (
    <>
      <Head>
        <title>Support</title>
      </Head>

      <ImageGridMenu menus={supportOption} />

      <div className="mt-6 pb-4 text-lg">App Requests</div>

      <ImageGridMenu menus={appRequests} />
    </>
  );
}
