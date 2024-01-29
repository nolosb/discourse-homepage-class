import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'homepage-class-init',
  initialize(container) {
    this.site = container.lookup('service:site');
    this.siteSettings = container.lookup('service:site-settings');

    withPluginApi('0.8.24', (api) => {
      api.onPageChange(() => {
        const router = api.container.lookup('service:router');
        const currentRoute = router.currentRoute.name;
        switch (settings.homepage) {
          case 'discovery.latest':
          case 'discovery.top':
          case 'discovery.categories':
            if (router.currentRoute.name === `${settings.homepage}`) {
              document.body.classList.add('homepage');
            } else {
              document.body.classList.remove('homepage');
            }
          case 'top-menu':
            const topMenu = this.siteSettings.top_menu;
            const targets = topMenu.split('|').map((opt) => `discovery.${opt}`);
            if (targets.includes(currentRoute)) {
              document.body.classList.add('homepage');
            } else {
              document.body.classList.remove('homepage');
            }
        }
      });
    });
  },
};
