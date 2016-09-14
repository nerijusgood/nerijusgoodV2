import { configure } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';

function requireAll(context) {
  return context.keys().map(context);
}

function loadStories() {
  requireAll(require.context('../app/components/', true, /.+\/stories\/.+\.js/));
}

configure(loadStories, module);
