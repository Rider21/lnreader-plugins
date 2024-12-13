import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as readline from 'readline';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testSource(id, url) {
  console.log('starting to test the source');

  const html = await fetch(url).then(res => res.text());
  const $ = cheerio.load(html);
  const apiPath =
    $('link[rel="https://api.w.org/"]').attr('href') || '/wp-json/';

  const wp_json = new URL(apiPath, url);
  const doc = await fetch(wp_json)
    .then(res => res.json())
    .catch(err => {});

  if (!doc?.routes?.['/wp/v2/categories'] || !doc?.routes?.['/wp/v2/posts'])
    throw new Error('This source does not meet the requirements');

  //check the api points
  try {
    //You can find all the books here
    const endpoints1 = new URL(
      apiPath + '/wp/v2/categories?hide_empty=true&per_page=5',
      wp_json.origin,
    );
    console.log(endpoints1, wp_json.href);
    const novels = await fetch(endpoints1).then(res => res.json());
    if (!novels.length && novels[0].id) throw new Error('no books found');
    console.log('Books found', novels.length);
    console.log(novels.map(n => n.title + '\n' + n.link).join('\n---'));

    //we only get one book
    const endpoints2 = new URL(
      apiPath + '/wp/v2/categories/' + novels[0].id,
      wp_json.origin,
    );
    const novel = await fetch(endpoints2).then(res => res.json());

    console.log('Single book\n', novel.name);
    if (!novel.name) throw new Error('book name not found');
    if (!novel.link) console.warn('site link not found');
    else console.log(novel.link);
    if (!novel.count) console.warn("the book doesn't have chapters.");
    else console.log(novel.count, ' chapters.');

    //chapter receipt verification
    console.log('chapter check');
    const chapter_id = novels.filter(n => n.count)[0].id;
    if (chapter_id) throw new Error('No chapters found');

    const endpoints3 = new URL(
      apiPath + '/wp/v2/posts?categories=' + chapter_id,
      wp_json.origin,
    );
    const chapters = await fetch(endpoints3).then(res => res.json());

    if (!chapters.length) throw new Error('No chapters found');
    if (!(chapters[0].date_gmt || chapters[0].date))
      console.warn("Chapters don't have a release date.");
    if (!chapters[0].content.rendered) throw new Error('chapter is empty');
  } catch (err) {
    console.log(err);
    return;
  }

  //save source
  const source = {
    id: id || wp_json.host.split('.')[0],
    sourceSite: wp_json.origin,
    sourceName: doc.name,
    options: {
      apiPath: wp_json.href,
    },
  };

  const allPlugins = await fs.promises
    .readFile(path.join(__dirname, './sources.json'))
    .then(data => JSON.parse(data));
  allPlugins.push(source);
  allPlugins.sort((a, b) => a.id.localeCompare(b.id));
  fs.writeFileSync(
    path.join(__dirname, './sources.json'),
    JSON.stringify(allPlugins, null, 2),
  );

  if (doc.routes['/wp/v2/tags']) {
    const filters = {
      'tags': {
        label: 'Tags',
        value: '',
        options: [{ label: 'NONE', value: '' }],
      },
    };
    if (filters.tags.options.length > 1) {
      fs.writeFileSync(
        path.join(__dirname, 'filters', source.id + '.json'),
        JSON.stringify({ filters }, null, 2),
      );
      console.log(`✅Filters created successfully for ${name}✅`);
    }
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function askGetFilter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const EREASE_PREV_LINE = '\x1b[1A\r\x1b[2K';
  await rl.question(
    'Enter the id of the site (same one as in sources.json): ',
    async id => {
      await rl.question(
        EREASE_PREV_LINE + 'Enter the URL (same one as in sources.json): ',
        async url => {
          try {
            await testSource(id, url);
          } catch (e) {
            console.err(e.message || e);
          }
          rl.close();
        },
      );
    },
  );
}

askGetFilter();
