import { handleGetQuoteOfTheDay } from '../services/quotes.js';
import { getTodayDate } from '../utils/getTodayDate.js';
import { Loader } from '../services/loader.js';

const loader = new Loader({
  size: 200,
  color: '#f4f4f4',
});

export async function renderQuoteOfTheDay() {
  const quoteTextEls = document.querySelectorAll('.quote-day-card-text');
  const quoteAuthorEls = document.querySelectorAll('.quote-day-card-author');

  if (!quoteTextEls.length || !quoteAuthorEls.length) return;

  const containers = Array.from(quoteTextEls)
    .map(el => el.parentElement)
    .filter(Boolean);

  try {
    // ✅ показуємо лоадер для кожного блоку і ЧЕКАЄМО
    await Promise.all(containers.map(c => loader.show(c)));

    const todayDate = getTodayDate();
    const lsRaw = localStorage.getItem('quoteOfTheDay');
    const ls_data = lsRaw ? JSON.parse(lsRaw) : null;

    let authorName;
    let authorQuote;

    if (ls_data && ls_data.date === todayDate) {
      authorName = ls_data.author;
      authorQuote = ls_data.quote;
    } else {
      const requestData = await handleGetQuoteOfTheDay();
      authorName = requestData.author;
      authorQuote = requestData.quote;
    }

    // ✅ заповнюємо ВСІ блоки
    quoteTextEls.forEach(el => (el.textContent = authorQuote || ''));
    quoteAuthorEls.forEach(el => (el.textContent = authorName || ''));
  } catch (error) {
    console.error('renderQuoteOfTheDay error:', error);
  } finally {
    // ✅ ховаємо лоадер і ЧЕКАЄМО
    await Promise.all(containers.map(c => loader.hide(c)));
  }
}
