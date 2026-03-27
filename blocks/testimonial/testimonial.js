import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [quoteRow, authorRow, roleRow] = [...block.children];

  const testimonial = document.createElement('figure');
  testimonial.className = 'testimonial-figure';
  moveInstrumentation(block, testimonial);

  if (quoteRow) {
    const quote = document.createElement('blockquote');
    quote.className = 'testimonial-quote';
    while (quoteRow.firstElementChild) quote.append(quoteRow.firstElementChild);
    testimonial.append(quote);
    quoteRow.remove();
  }

  if (authorRow || roleRow) {
    const caption = document.createElement('figcaption');
    caption.className = 'testimonial-attribution';

    if (authorRow) {
      const author = document.createElement('p');
      author.className = 'testimonial-author';
      author.textContent = authorRow.textContent.trim();
      caption.append(author);
      authorRow.remove();
    }

    if (roleRow) {
      const role = document.createElement('p');
      role.className = 'testimonial-role';
      role.textContent = roleRow.textContent.trim();
      caption.append(role);
      roleRow.remove();
    }

    testimonial.append(caption);
  }

  block.replaceChildren(testimonial);
}
