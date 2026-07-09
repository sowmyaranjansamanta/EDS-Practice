export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 6) return;

  const [
    image,
    caption,
    title,
    subtitle,
    description,
    readTime,
  ] = rows;

  const article = document.createElement('article');
  article.classList.add('blog-card');

  const figure = document.createElement('figure');
  figure.classList.add('blog-image');
  figure.append(image);

  const figCaption = document.createElement('figcaption');
  figCaption.textContent = caption.textContent.trim();
  figure.append(figCaption);

  const titleElement = document.createElement('h2');
  titleElement.textContent = title.textContent.trim();

  const subtitleElement = document.createElement('h4');
  subtitleElement.textContent = subtitle.textContent.trim();

  const readTimeElement = document.createElement('p');
  readTimeElement.classList.add('read-time');
  readTimeElement.textContent = `${readTime.textContent.trim()} min read`;

  article.append(
    figure,
    titleElement,
    subtitleElement,
    readTimeElement,
    description,
  );
  block.replaceChildren(article);
}
