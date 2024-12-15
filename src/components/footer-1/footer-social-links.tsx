import { type socialLinks } from "./config";

interface Props {
  links: typeof socialLinks;
}

export const FooterSocialLinks = ({ links }: Props) => (
  <ul className="inline-flex items-center gap-x-6">
    {links.map(({ name, href, icon: Icon }) => (
      <li key={name}>
        <a
          className="text-muted-foreground transition-colors hover:text-foreground/70"
          href={href}
        >
          <Icon className="size-6" />
          <span className="sr-only">{name}</span>
        </a>
      </li>
    ))}
  </ul>
);
