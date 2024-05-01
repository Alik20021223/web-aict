export type ContactBlock = {
  id: number;
  img: {
    alt: string;
    url: string;
  };
  value: string;
  describe: string
  link: string
};

export type ContactApp = {
    data: ContactBlock[]
}
