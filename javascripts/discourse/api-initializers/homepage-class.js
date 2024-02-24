import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.8', (api) => {
  const siteSettings = api.container.lookup('service:site-settings');
  const router = api.container.lookup('service:router');

  api.onPageChange(() => {
    const currentRoute = router.currentRoute.name;
    switch (settings.homepage) {
      case 'discovery.top':
      case 'discovery.latest':
      case 'discovery.categories':
        if (currentRoute === settings.homepage) {
          document.body.classList.add('homepage');
        } else {
          document.body.classList.remove('homepage');
        }
        break;
      case 'top-menu':
        const topMenu = siteSettings.top_menu;
        const targets = topMenu.split('|').map((opt) => `discovery.${opt}`);
        if (targets.includes(currentRoute)) {
          document.body.classList.add('homepage');
        } else {
          document.body.classList.remove('homepage');
        }
        break;
    }
  });
});
