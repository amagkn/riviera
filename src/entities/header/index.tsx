import * as React from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { paths } from "@/shared/paths";
import { BellIcon, SearchIcon } from "@/shared/assets/icons";
import { Input } from "@nextui-org/react";

export const Header: React.FC = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link className="font-bold" href={paths.home()}>
          REVIERA
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input startContent={<SearchIcon />} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href={paths.notifications()}>
            <BellIcon />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button>Войти</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
