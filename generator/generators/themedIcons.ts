/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import fs from 'fs';
import path from 'path';
import TextToSVG from 'text-to-svg';
import { IconsObj } from '../@generator';

const textToSVG = TextToSVG.loadSync(path.join(__dirname, '../../src/font/devicon.ttf'));

const themedIcons = () => {
  if (!fs.existsSync(path.join(__dirname, '../../icons')))
    fs.mkdirSync(path.join(__dirname, '../../icons'));

  const iconsObj: IconsObj = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/data/index.json'), 'utf8'));

  Object.entries(iconsObj)
    .forEach(([k, v]) => {
      const iconsPath = `../../icons/${k}`;
      if (!fs.existsSync(path.join(__dirname, iconsPath)))
        fs.mkdirSync(path.join(__dirname, iconsPath));

      Object.entries(v.versions)
        .forEach(([kVersions, vVersions]: [string, any]) => {
          const theme = (str: string) => (
            textToSVG.getSVG(
              String.fromCharCode(vVersions as number), {
                anchor: 'left top',
                fontSize: 128,
                attributes: {
                  fill: str === 'dark' ? '#ffffff' : '#000000'
                }
              })
          );

          ['dark', 'light']
            .forEach(e => fs.writeFileSync(path.join(__dirname, `${iconsPath}/${kVersions}-${e}.svg`), theme(e)));
        });
    });
};

export default themedIcons;
