/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import fs from 'fs';
import path from 'path';
import { IconsObj } from '../@generator';

const listOfIconsAndVersionsGenerator = (iconsObj: IconsObj) => {
  if (!fs.existsSync(path.join(__dirname, '../../docs/ptbr/list-of-icons-and-versions')))
    [
      '../../docs/list-of-icons-and-versions',
      '../../docs/ptbr/list-of-icons-and-versions'
    ].forEach(e => fs.mkdirSync(path.join(__dirname, e), { recursive: true }));

  const doc = (ptbr?: boolean) => [
    ptbr ? 
        '# Lista das versões de ícone suportadas'
      : '# List of supported icon versions',
    '',
    Object.entries(iconsObj).map(([k, v]) => 
      `* **${k}**: ${
        Object.keys(v.versions)
          .map(e => `\`${e}\``)
          .join(', ')
      }`
    ).join('\n'),
    '',
    '<div align="center">',
    '',
    ptbr ?
        [
          '**Baseado em [Devicon](https://github.com/devicons/devicon) e distribuído por [Vercel](https://vercel.com/)**\\',
          '**Feito com ❤**'
        ].join('\n')
      : [
          '**Based in [Devicon](https://github.com/devicons/devicon) and powered by [Vercel](https://vercel.com/)**\\',
          '**Made with ❤**'
        ].join('\n'),
    '</div>'
  ].join('\n');

  fs.writeFileSync(path.join(__dirname, '../../docs/list-of-icons-and-versions/README.md'), doc());
  fs.writeFileSync(path.join(__dirname, '../../docs/ptbr/list-of-icons-and-versions/README.md'), doc(true));
};

export default listOfIconsAndVersionsGenerator;
