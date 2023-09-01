export type Movie = {
  id: string;
  attributes: {
    titles: {
      en: string;
      en_jp: string;
      en_us: string;
    };
    description: string;
    posterImage: {
      original: string;
      small: string;
      tiny: string;
      large: string;
      medium: string;
    },
    slug: string;
  }
}