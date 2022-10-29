/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import axios from 'axios';
import dataGenerator from './generators/dataGenerator';
import listOfIconsAndVersionsGenerator from './generators/listOfIconsAndVersionsGenerator';
import { DeviconsArray, IconsObj } from './@generator';

const baseURL = `https://cdn.jsdelivr.net/gh/devicons/devicon@master/`;

const generator = async () => {
  const versionPriority = [
    'original',
    'plain',
    'line',
    'original-wordmark',
    'plain-wordmark',
    'line-wordmark'
  ];

  const deviconBase = (await axios.get(`${baseURL}devicon-base.css`)).data;
  const deviconsArray: DeviconsArray = (await axios.get(`${baseURL}devicon.json`)).data;
  const defaultColors = Object.fromEntries(deviconsArray.map(e => [e.name, e.color]));

  const stringToObj = Object.fromEntries(
    deviconBase
      .replace(/^(?!\.devicon|\s+content).+/gm, '')
      .replace(/.devicon-|\{|:before|content:/gm, '')
      .replace(/^(.+?)\s?\n\s+(".+");/gm, '$1: $2')
      .replace(/"|[ ]|\\/gm, '')
      .split('\n')
      .filter((e: string) => e)
      .map((e: string) => {
        const [k, v] = e.split(':');
        return [k, parseInt(v, 16)];          
      })
  );

  const iconsObj: IconsObj = Object.fromEntries(
    [...new Set(Object.keys(stringToObj).map(e => e.split('-')[0]))]
      .map(e => {
        const versions = Object.entries(stringToObj)
          .filter(([k, _]) => k.split('-')[0] === e)
          .map(([k, v]) => [k.split('-').slice(1).join('-'), v])
          .filter(f => f[0])
          .sort((a, b) => versionPriority.indexOf(a[0]) - versionPriority.indexOf(b[0]));

        return [
          e === 'dot' ? 'dotnet' : e,
          e === 'dot' ? {
            defaults: {
              icon: versions[0][1],
              color: '#1384c8'.toUpperCase()
            },
            versions: {
              'plain-wordmark': 59091,
              'plain': 59092
            }
          } 
          : {
            defaults: {
              icon: versions[0][1],
              color: defaultColors[e]?.toUpperCase()
            },
            versions: Object.fromEntries(versions)
          }
        ];
      })
      .sort()
    );

  return iconsObj;
};

generator()
  .then(iconsObj => {
    dataGenerator(iconsObj);
    listOfIconsAndVersionsGenerator(iconsObj);  
  });
