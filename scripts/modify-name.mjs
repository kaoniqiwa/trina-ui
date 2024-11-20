import { readFileSync, writeFileSync } from 'node:fs';
import globby from 'globby';
import { accessSync, constants, chmodSync, appendFileSync, openSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const reg = /name:\s\'A(?=[\s\S]*,)/g;

// const path = join(__dirname, '../components', '**', '*.ts{,?}');
// const paths = await globby(path, {
//   ignore: ['**/demo/**', '**/style/**', '**/__tests__/**'],
// });
// console.log(path);
// console.log(paths);

// paths.forEach(path => {
//   const content = readFileSync(path, { encoding: 'utf-8' });
//   const replaced = content.replace(reg, "name: 'T");
//   writeFileSync(path, replaced);
// });
