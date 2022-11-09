import Link from "next/link";

export default function ImageGridMenu({ title, imageSrc, subTitle, href }) {
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
