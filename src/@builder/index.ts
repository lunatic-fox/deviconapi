/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

export type IconVersions =
    'original'
  | 'plain'
  | 'line'
  | 'original-wordmark'
  | 'plain-wordmark'
  | 'line-wordmark';

export type Query = {
  icon?: string,
  color: string,
  theme: 'dark' | 'light',
  version: IconVersions,
  size: number
};

export type IconsObj = {
  [k: string]: {
    defaults: {
      icon: number;
      color: string;
    };
    versions: IconVersions;
  };
};
