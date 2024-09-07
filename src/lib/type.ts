import { ReactElement } from "react";


type MenuItem = {
    label: string;
    href: string;
    icon?: ReactElement<string>;
    visible: string[]
}

type MenuList = {
    title: string;
    items: MenuItem[];
}


export type {
    MenuItem,
    MenuList,

}