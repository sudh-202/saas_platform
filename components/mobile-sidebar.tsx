"use client"

import { Button } from "@/components/ui/button";
import { Menu} from "lucide-react";
import Sidebar from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar