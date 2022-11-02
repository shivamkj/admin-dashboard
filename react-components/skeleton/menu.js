import {
  CogIcon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  PhoneArrowUpRightIcon,
  UserGroupIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

export const navigationOptions = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "All Files", href: "/home", icon: ViewfinderCircleIcon },
  { name: "Photos", href: "#", icon: PhoneArrowUpRightIcon },
  { name: "Shared", href: "#", icon: UserGroupIcon },
  { name: "Albums", href: "#", icon: ChatBubbleOvalLeftIcon },
  { name: "Settings", href: "#", icon: CogIcon },
];
