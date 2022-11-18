import Link from "next/link";

export default function ImageGridMenu({ menus }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {menus.map((menu) => (
        <ImageGridMenuSingle
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

function ImageGridMenuSingle({ title, imageSrc, subTitle, href }) {
  return (
    <li className="relative">
      <Link href={href}>
        <div className="group block w-full h-24 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={imageSrc}
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {title}</span>
          </button>
        </div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {title}
        </p>
        <p className="block text-sm font-medium text-gray-500 pointer-events-none">
          {subTitle}
        </p>
      </Link>
    </li>
  );
}
