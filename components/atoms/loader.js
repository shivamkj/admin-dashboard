export function Loader() {
  return (
    <div id="__loading__indicator" className="z-20">
      <div></div>
    </div>
  );
}

export function Overlay({ children }) {
  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-30">
      {children}
    </div>
  );
}
