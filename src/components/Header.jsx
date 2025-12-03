import { RiArrowDownSLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../data/data";
import Button from "./Button";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white w-full py-4 border-b border-neutral-200 z-50">
      <div className="px-4 sm:px-8 flex flex-wrap items-center justify-between">
        {/* logo */}
        <Logo />
        {/* Mobile menu */}
        <nav className="lg:hidden relative">
          {/* Menu icon */}
          <button
            className="shadow-util p-2 rounded-full font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
          {/* list */}
          <ul
            className={`absolute top-full right-0 mt-3 shadow-util bg-white rounded-lg min-w-[200px] w-full  transition ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center justify-between gap-1 text-gray-600 hover:text-lime-600 hover:bg-lime-50 transition-all px-4 py-1.5 rounded-lg"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                  )}
                </a>
                {item.hasDropdown && (
                  <ul className="absolute top-full right-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-util min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                    {item.dropdown.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Menu */}
        <nav className="flex-1 lg:flex flex-wrap hidden">
          {/* Center div */}
          <div className="mx-auto flex items-center gap-7">
            {/* Search bar */}
            <div className="hidden xl:block">
              <SearchInput />
            </div>
            {/* list */}
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 hover:text-lime-600 transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <RiArrowDownSLine className="group-hover:rotate-180 transition-transform" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <ul className="absolute top-full left-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-util min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                      {item.dropdown.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Btn */}
          <Button label={"Sign Up"} classes="ml-auto" />
        </nav>
        {/* input */}
        <div className="xl:hidden w-full mt-4">
          <SearchInput />
        </div>
      </div>
    </header>
  );
}
