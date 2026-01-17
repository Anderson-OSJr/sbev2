import menuItems from "../data/menuItems";

const MobileMenu = () => {
  return (
    <div className="flex flex-col bg-blue-950 p-4 gap-3 border-2 border-blue-200 rounded-sm shadow-xl shadorw-blue-900 -mt-[80px]">
      {menuItems.map((item) => (
        <a
          key={item.index}
          href={item.href}
          className="text-blue-100 hover:text-blue-50 text-md w-fit hover:-translate-y-1 hover:scale-110 hover:border-b-1"
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};
export default MobileMenu;
