/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import fs from 'fs';
import path from 'path';
import TextToSVG from 'text-to-svg';
import { IconsObj, Query } from './@builder';

const textToSVG = TextToSVG.loadSync(path.join(__dirname, './font/devicon.ttf'));

const SVGBuilder = async (query: Query) => {
  const versionPriority = [
    'original',
    'plain',
    'line',
    'original-wordmark',
    'plain-wordmark',
    'line-wordmark'
  ];

  const iconsObj: IconsObj = JSON.parse(fs.readFileSync(path.join(__dirname, './data/index.json'), 'utf8'));

  const iconName = Object.keys(query)
    .filter(e => ![
      'color',
      'theme',
      'version',
      'size'
    ].some(f => e === f))[0];

  if (iconsObj[iconName]) {
    const icon = versionPriority.includes(query.version) ?
        String.fromCharCode(iconsObj[iconName].versions[query.version])
      : String.fromCharCode(iconsObj[iconName].defaults.icon);

    return textToSVG.getSVG(icon, {
      anchor: 'left top',
      fontSize: query.size ?? 128,
      attributes: {
        fill:
            query.theme === 'dark' ? '#ffffff'
          : query.theme === 'light' ? '#000000'
          : query.color ? (
              query.color.match(/[a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8}/i) ?
                  `#${query.color}`
                : query.color
            )
          : iconsObj[iconName].defaults.color
      }
    });
  }
  return `<svg xmlns="http://www.w3.org/2000/svg"></svg>`;
}

export default SVGBuilder;
