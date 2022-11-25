interface SocialLink {
  id: number;
  name: string;
  logo: string;
  url: string;
}

type Social = SocialLink[];

export { SocialLink, Social };
