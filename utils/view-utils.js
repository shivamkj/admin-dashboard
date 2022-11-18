function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export { classNames };

export const handleNavigation = (e, router, href) => {
  e.preventDefault();
  if (router.asPath == href) return;
  router.push(href);
};
