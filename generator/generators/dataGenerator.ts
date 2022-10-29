/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import fs from 'fs';
import path from 'path';
import { IconsObj } from '../@generator';

const dataGenerator = (iconsObj: IconsObj) => {
  if (!fs.existsSync(path.join(__dirname, '../../src/data')))
    fs.mkdirSync(path.join(__dirname, '../../src/data'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, '../../src/data/index.json'), JSON.stringify(iconsObj, null, 2));
};

export default dataGenerator;
