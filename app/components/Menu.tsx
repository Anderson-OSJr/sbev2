import menuItems from "./menuItems";

const Menu = () => {
  return (
    <div className="hidden md:flex flex-col lg:flex-row mr-6 p-3">
      {menuItems.map((item) => (
        <a
          key={item.index}
          href={item.href}
          className="text-blue-900 md:text-blue-300 ml-3 hover:text-blue-200 hover:border-b hover:border-blue-50 w-fit 2xl:text-lg hover:-translate-y-1 hover:scale-110"
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};
export default Menu;
