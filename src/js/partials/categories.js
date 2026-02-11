import { exerciseLimit } from '../constants/limits';
import { mainHomeRefs } from '../constants/refs';
import { handleGetFilters } from '../services/filters';
import { Loader } from '../services/loader';
import { clearPagination, renderPagination } from '../sharedComponents/pagination';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { removeSpaces } from '../utils/removeSpaces';
import { loadExercises } from './exercises';
import { handleSearchInput } from './search';

export const homeLoader = new Loader({ size: 200 });

export const loadCategories = async query => {
  mainHomeRefs.cardsContainer.innerHTML = '';
  clearPagination();

  try {
    await homeLoader.show(mainHomeRefs.cardsContainer.id);

    const data = await handleGetFilters(query);

    await homeLoader.hide(mainHomeRefs.cardsContainer.id);

    const { totalPages, results } = data;

    if (!results || results.length === 0) {
      mainHomeRefs.cardsContainer.innerHTML =
        '<p class="not-items-message">No categories found for this filter.</p>';
      return;
    }

    renderCategories(results);

    renderPagination({
      totalPages,
      query,
      onPageChange: newPage => {
        loadCategories({ ...query, page: newPage });
      },
    });
  } catch (error) {
    mainHomeRefs.cardsContainer.innerHTML = '';
  }
};

export const renderCategories = data => {
  mainHomeRefs.sectionTitle.textContent = 'Exercises';
  mainHomeRefs.sectionSubTitle.textContent = '';

  // ✅ На категоріях пошук прихований
  toggleSearchInput(false);

  const markup = data.map(createCategoryCard).join('');
  mainHomeRefs.cardsContainer.innerHTML = markup;

  bindCategoryClickHandlers();
};

export const bindCategoryClickHandlers = () => {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.dataset.name;
      const categoryType = card.dataset.type?.toLowerCase().trim();

      handleCategoryClick(categoryName, categoryType);
    });
  });
};

const filterButtonsContainer = document.querySelector('.filters');

if (filterButtonsContainer) {
  filterButtonsContainer.addEventListener('click', async event => {
    // Шукаємо найближчу кнопку, якщо клікнули по тексту всередині
    const target = event.target.closest('button');

    if (!target || target.classList.contains('active')) {
      return;
    }

    const filter = target.dataset.type;
    console.log('Вибрано фільтр:', filter); // Це допоможе нам побачити роботу в консолі

    // Перемикаємо активний клас (використовуємо .filter-btn як у твоїй консолі)
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');

    // Очищуємо заголовки сторінки
    mainHomeRefs.sectionTitle.textContent = 'Exercises';
    mainHomeRefs.sectionSubTitle.textContent = '';

    // Завантажуємо категорії
    loadCategories({ filter, page: 1, limit: exerciseLimit });
  });
}

export const createCategoryCard = category => {
  return `
    <li
      class="category-card"
      data-name="${category.name}"
      data-type="${category.filter}"
      data-id="${category.id}"
      style="
        background-image:
          linear-gradient(0deg, rgba(17,17,17,0.50) 0%, rgba(17,17,17,0.50) 100%),
          url('${category.imgURL}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="category-card-text">
        <h3 class="category-card-title">${capitalizeFirstLetter(category.name)}</h3>
        <p class="category-card-sub">${category.filter}</p>
      </div>
    </li>
  `;
};

export const handleCategoryClick = (categoryName, filterType) => {
  
  toggleSearchInput(true);

  
  if (mainHomeRefs.searchInputEl) mainHomeRefs.searchInputEl.value = '';

  mainHomeRefs.sectionTitle.textContent = 'Exercises /';
  mainHomeRefs.sectionSubTitle.textContent = capitalizeFirstLetter(categoryName);

  const query = {
    [removeSpaces(filterType)]: categoryName,
    page: 1,
    limit: exerciseLimit,
  };

  loadExercises(query);
};

export const toggleSearchInput = visible => {
  const form = mainHomeRefs.searchForm;

  if (!form) return;

  
  form.style.display = visible ? 'block' : 'none';

  
  form.removeEventListener('submit', handleSearchInput);
  if (visible) {
    form.addEventListener('submit', handleSearchInput);
  }
};

loadCategories({ filter: 'Muscles', page: 1, limit: exerciseLimit });
