import menuItems from "../data/menuItems";

const Menu = () => {
  return (
    <div className="hidden md:flex lg:flex-row p-2">
      {menuItems.map((item) => (
        <a
          key={item.index}
          href={item.href}
          className="md:text-blue-300 ml-3 hover:text-blue-200 w-fit hover:border-b hover:border-blue-50 text-sm 2xl:text-base hover:-translate-y-1 hover:scale-110"
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};
export default Menu;
