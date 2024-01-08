import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'homepage-class-init',
  initialize() {
    withPluginApi('0.8.24', (api) => {
      api.onPageChange(() => {
        const router = api.container.lookup('service:router');
        if (router.currentRoute.name === `${settings.homepage}`) {
          document.body.classList.add('homepage');
        } else {
          document.body.classList.remove('homepage');
        }
      });
    });
  },
};
