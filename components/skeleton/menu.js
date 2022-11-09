import {
  faTicket,
  faChartLine,
  faBullhorn,
  faCalendarPlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export const navigationOptions = [
  { name: "Home", href: "/", icon: faHouse },
  { name: "Support", href: "/support", icon: faTicket },
  { name: "Analytics", href: "/analytics", icon: faChartLine },
  { name: "Marketing", href: "/marketing", icon: faBullhorn },
  { name: "More", href: "/more", icon: faCalendarPlus },
];
