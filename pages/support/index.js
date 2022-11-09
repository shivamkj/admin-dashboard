import ImageGridMenu from "../../components/molecule/image-grid-menu";

const menus = [
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
    href: "/support/matches?gameType=0",
  },
  {
    title: "Teams",
    subTitle: "See all Teams (Soccer & Cricker)",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    href: "/support/teams",
  },
];

export default function Support() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {menus.map((menu) => (
        <ImageGridMenu
          key={menu.thumbnail}
          title={menu.title}
          subTitle={menu.subTitle}
          imageSrc={menu.thumbnail}
          href={menu.href}
        />
      ))}
    </ul>
  );
}
