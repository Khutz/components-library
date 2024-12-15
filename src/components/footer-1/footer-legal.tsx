import { Separator } from "@radix-ui/react-separator";

export const FooterLegal = () => (
  <>
    <Separator className="mb-6 mt-16 sm:mt-20 lg:mt-24" />
    <span className="text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
    </span>
  </>
);
