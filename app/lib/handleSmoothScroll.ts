export const handleSmoothScroll = (id: string, setIsMobileMenuOpen?: any) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
};
