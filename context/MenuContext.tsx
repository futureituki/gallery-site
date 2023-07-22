
import React, { createContext, useState, useContext } from 'react';

// コンテキストを作成
const MenuContext = createContext({
    open: false,
    handleOpen: () => {},
});

// プロバイダーコンポーネントを作成
const MenuContextProvider:React.FC<{children:React.ReactNode}> = ({ children }):React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open)
        return (
            <MenuContext.Provider value={{open, handleOpen}}>
                {children}
            </MenuContext.Provider>
            )
};

// カスタムフックを作成
const useMenuContext = () => {
    return useContext(MenuContext);
};

export { MenuContextProvider, useMenuContext };