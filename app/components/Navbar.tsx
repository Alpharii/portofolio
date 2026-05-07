import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

import {
  Menu,
  ArrowUpRight,
} from "lucide-react";

import { FaUser } from "react-icons/fa";
import { handleSmoothScroll } from "~/lib/handleSmoothScroll";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Experiences", href: "experiences" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Techstack", href: "skills" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-black/70 backdrop-blur-xl
      "
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("home")}
          className="
            flex items-center gap-2
            text-lg font-semibold tracking-tight
            text-white transition-opacity
            hover:opacity-80
          "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl border border-white/10
              bg-zinc-900
            "
          >
            <FaUser className="text-sm text-white" />
          </div>

          <span>
            Alphari
          </span>
        </button>

        {/* Desktop Menu */}
        <div
          className="hidden items-center gap-1 md:flex"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleSmoothScroll(item.href)}
              className="
                rounded-lg px-4 py-2
                text-sm font-medium text-zinc-400
                transition-all duration-200
                hover:bg-white/5
                hover:text-white
              "
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div
          className="hidden md:block"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <Button
            onClick={() => handleSmoothScroll("contact")}
            className="
              gap-2 rounded-xl
              bg-white text-black
              hover:bg-zinc-200
            "
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Dialog
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
        >
          <DialogTrigger asChild className="md:hidden">
            <Button
              size="icon"
              variant="outline"
              className="
                border-white/10
                bg-zinc-900 text-white
                hover:bg-zinc-800
              "
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>

          <DialogContent
            className="
              border-white/10
              bg-black text-white
              sm:max-w-sm
            "
          >
            <div className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href)}
                  className="
                    rounded-xl px-4 py-3 text-left
                    text-sm font-medium text-zinc-300
                    transition-all duration-200
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {item.name}
                </button>
              ))}

              <Button
                onClick={() => handleSmoothScroll("contact")}
                className="
                  mt-4 w-full rounded-xl
                  bg-white text-black
                  hover:bg-zinc-200
                "
              >
                Contact Me
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;