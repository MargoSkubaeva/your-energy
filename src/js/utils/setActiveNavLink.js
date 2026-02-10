export const getPathnameFromHref = link => {
  const href = link.getAttribute('href');
  if (!href || href === '#') return '';
  
  return href.split('/').pop() || 'index.html';
};

export const setActiveLink = () => {
  const links = document.querySelectorAll('.nav-link');
  
  let currentPath = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const linkHref = getPathnameFromHref(link);
    
    if (linkHref === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};