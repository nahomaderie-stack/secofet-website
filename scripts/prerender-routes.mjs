import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, '..');
const distDirectory = path.join(projectDirectory, 'dist');
const template = await readFile(path.join(distDirectory, 'index.html'), 'utf8');
const routes = [
  '/',
  '/about/',
  '/our-coffees/',
  '/origins/',
  '/operations/',
  '/contact/',
  '/rfq/',
  '/request-sample/',
  '/terms/',
  '/privacy/',
  '/cookie/',
];

function createPageHtml(url) {
  const { appMarkup } = render(url);
  const headElements = [];
  const bodyMarkup = appMarkup
    .replace(/<(title|script)\b[^>]*>[\s\S]*?<\/\1>/gi, (element) => {
      headElements.push(element);
      return '';
    })
    .replace(/<(meta|link)\b[^>]*\/?>/gi, (element) => {
      headElements.push(element);
      return '';
    });
  const htmlWithRouteHead = template
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, '')
    .replace('</head>', `${headElements.join('\n')}\n  </head>`);
  const pageHtml = htmlWithRouteHead.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${bodyMarkup}</div>`,
  );

  if (pageHtml === htmlWithRouteHead) {
    throw new Error(`Could not find the React root while rendering ${url}`);
  }

  return pageHtml;
}

for (const route of routes) {
  const routeDirectory =
    route === '/'
      ? distDirectory
      : path.join(distDirectory, route.slice(1, -1));

  await mkdir(routeDirectory, { recursive: true });
  await writeFile(
    path.join(routeDirectory, 'index.html'),
    createPageHtml(route),
    'utf8',
  );
}

await writeFile(
  path.join(distDirectory, '404.html'),
  createPageHtml('/__not_found__/'),
  'utf8',
);
