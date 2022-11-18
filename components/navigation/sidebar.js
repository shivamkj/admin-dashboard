import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { navigationOptions } from "./menu.js";
import { classNames } from "../../utils/index";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="hidden w-28 py-6 bg-indigo-700 flex-col items-center md:flex">
      <div className="flex-shrink-0 flex items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
          alt="Workflow"
        />
      </div>
      <div className="flex-1 mt-6 w-full px-2 space-y-1">
        {navigationOptions.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              router.asPath.startsWith(item.href) && item.href != "/"
                ? "bg-indigo-800 text-white"
                : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
              "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={classNames(
                item.current
                  ? "text-white"
                  : "text-indigo-300 group-hover:text-white",
                "h-6 w-6 m-2"
              )}
              aria-hidden="true"
              size="lg"
            />
            <span className="mt-2">{item.name}</span>
          </Link>
        ))}
      </div>

      <Menu as="div" className="mt-auto">
        <div>
          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
