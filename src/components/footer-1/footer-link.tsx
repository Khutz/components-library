import { Button } from "../ui/button";

interface Props {
  name: string;
  href: string;
}

export const FooterLink = ({ name, href }: Props) => (
  <li>
    <Button asChild className="h-auto p-0 text-muted-foreground" variant="link">
      <a href={href}>{name}</a>
    </Button>
  </li>
);
