import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@clerk/nextjs";
// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";
import { UserButton } from "@clerk/nextjs";

const SettingsPage = async () => {
  // const isPro = await checkSubscription();
  // const { isSignedIn } = useAuth();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {/* {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."} */}
          You are currently on a Trial Version of Site!
        </div>
        {/* <SubscriptionButton isPro={isPro} /> */}
        {/* <div className="flex items-center gap-x-2">
                <Link href={ "/dashboard" }>
                    <Button variant="outline" className="rounded-full">
                        Manage Account
                    </Button>
                </Link>
            </div> */}
            <div className="flex w-full justify-start">
                <UserButton afterSignOutUrl="/" />
                <div className="py-1 px-2">Manage Account</div>
                
            </div>
      </div>
    </div>
   );
}
 
export default SettingsPage;