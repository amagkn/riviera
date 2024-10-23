import * as React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { paths } from "@/shared/paths";
import { BellIcon } from "@/shared/assets/icons";

export const AppHeader: React.FC = () => {
  return (
    <div className="px-5 flex justify-between items-center h-[10vh]">
      <div>
        <Link className="font-bold" href={paths.home()}>
          REVIERA
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-4">
          <Link href={paths.notifications()}>
            <BellIcon />
          </Link>
        </div>
        <div>
          <Button>Войти</Button>
        </div>
      </div>
    </div>
  );
};
