import { createContext, useContext, useState } from 'react';

type MenuContextProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const MenuContext = createContext<MenuContextProps | null>(null);

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Must be Used within Menu');
  }

  return context;
};

function Menu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return <MenuContext.Provider>{children}</MenuContext.Provider>;
}
