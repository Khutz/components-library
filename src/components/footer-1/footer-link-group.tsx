import { FooterLink } from "./footer-link";

interface Link {
  name: string;
  href: string;
}

interface Props {
  title: string;
  links: Link[];
}

export const FooterLinkGroup = ({ title, links }: Props) => (
  <li className="space-y-6">
    <h3 className="text-sm font-semibold">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <FooterLink key={link.name} href={link.href} name={link.name} />
      ))}
    </ul>
  </li>
);
