import { mobileMenuRefs, modalRefs, refs } from '../constants/refs.js';
import { preparingCardsMarkup } from '../sharedComponents/exercisesCards.js';

export function setFavoriteButtonToAdd() {
	modalRefs.favoriteButton.innerHTML = `
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`;
}

export function setFavoriteButtonToRemove() {
	modalRefs.favoriteButton.innerHTML = `
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`;
}

export function handleFavoriteClick(favorites, exercise) {
	const exerciseIndex = favorites.findIndex(fav => fav._id === exercise._id);

	if (exerciseIndex === -1) {
		// Add to favorites
		favorites.push(exercise);
		setFavoriteButtonToRemove();
	} else {
		// Remove from favorites
		favorites.splice(exerciseIndex, 1);
		setFavoriteButtonToAdd();
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFromFavorites(event) {
  const btn = event.target.closest('.js-delete-button');
  if (!btn) return;

  const exerciseId = btn.dataset.exerciseId;

  const favoritesListJson = localStorage.getItem('favorites');
  const favoritesList = favoritesListJson ? JSON.parse(favoritesListJson) : [];

  const updatedFavorites = favoritesList.filter(
    exercise => exercise._id !== exerciseId
  );

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

  // Перерендер сторінки Favorites
  renderFavoritesItems();
}


export function renderFavoritesItems() {
  const workuotList = document.querySelector('.workout-list');
  const errorEl = document.querySelector('.not-items-message');

  if (!workuotList || !errorEl) return;

  let favoritesList = [];
  try {
    const json = localStorage.getItem('favorites');
    favoritesList = json ? JSON.parse(json) : [];
  } catch {
    favoritesList = [];
  }

  if (!favoritesList.length) {
    workuotList.innerHTML = '';
    errorEl.hidden = false;
    return;
  }

  errorEl.hidden = true;
  preparingCardsMarkup(workuotList, favoritesList);

  document.querySelectorAll('.js-delete-button').forEach(btn => {
    btn.addEventListener('click', removeFromFavorites);
  });
}

