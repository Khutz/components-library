import { socialLinks } from "./config";
import { TailwindIcon } from "./icons/tailwind";
import { FooterSocialLinks } from "./footer-social-links";

export const FooterBrand = () => {
  return (
    <div className="space-y-8 xl:col-span-2">
      <TailwindIcon className="h-10 text-[#6366F1]" />
      <p className="text-sm">
        Making the world a better place through constructing elegant
        hierarchies.
      </p>
      <FooterSocialLinks links={socialLinks} />
    </div>
  );
};
