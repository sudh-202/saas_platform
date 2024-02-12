"use client"

import { Button } from "@/components/ui/button";
import { Menu} from "lucide-react";
import Sidebar from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
    apiLimitCount: number;
}


const MobileSidebar = ({
    apiLimitCount
}: MobileSidebarProps) => {
    const [isMOunted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMOunted){
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <Sidebar apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar