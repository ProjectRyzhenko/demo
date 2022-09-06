export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Інформаційний Бот';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'ГУМАНІТАРНА ДОПОМОГА';

  const bTitle = process.env.b_TITLE
  ? decodeURI(process.env.b_TITLE)
  : 'БЛОГ. НОВИНИ';

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'APPWEB.STORE';

  return {
    name,
    blogTitle,
    footerText,
    bTitle,

  };
};
