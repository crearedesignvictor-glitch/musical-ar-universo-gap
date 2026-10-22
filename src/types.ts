export interface ShowCardData {
  id: string;
  name: string;
  titlePrefix: string;
  titleHighlight: string;
  dateCode: '14' | '27';
  dateTime: string;
  location: string;
  headline: string;
  venue: string;
  blurb: string;
  image: string;
  alt: string;
}

export type FilterDate = 'all' | '14' | '27';
