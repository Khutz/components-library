import { type exploreLinks } from "./config";
import { FooterLinkGroup } from "./footer-link-group";

interface Props {
  categories: typeof exploreLinks;
}

export const FooterNavigation = ({ categories }: Props) => (
  <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 xl:col-span-4 xl:grid-cols-subgrid">
    {categories.map(({ name, links }) => (
      <FooterLinkGroup key={name} links={links} title={name} />
    ))}
  </ul>
);
