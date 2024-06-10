import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const dropDownNavbar = [
  { id: 1, name: "Акции", path: "/catalogs/sales" },
  {
    id: 2,
    name: "Материалы для упаковки банковских ценностей",
    path: "/catalogs/materialforbank",
  },
  {
    id: 3,
    name: "Расходные материалы для инкассации",
    path: "/catalogs/materialforinkas",
  },
  {
    id: 4,
    name: "Материалы для пломбирования",
    path: "/catalogs/materialforplomb",
  },
  { id: 5, name: "Технические ткани", path: "/catalogs/sales" },
  { id: 6, name: "Мешковина, упаковочная ткань", path: "/catalogs/sales" },
];
export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2  text-gray-900 shadow-sm   hover:bg-gray-50 hover:text-green">
          Каталог
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-10 w-72 origin-top-right rounded-md shadow-lg   focus:outline-none">
          <div className="py-1">
            {dropDownNavbar.map((el) => (
              <div className="bg-[#fff] hover:text-green" key={el.id}>
                <MenuItem>
                  {() => (
                    <a
                      href={el.path}
                      className="text-gray-700
                        block px-4 py-2 text-sm"
                    >
                      {el.name}
                    </a>
                  )}
                </MenuItem>
              </div>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
