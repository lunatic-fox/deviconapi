/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

type IconVersions =
    'original'
  | 'plain'
  | 'line'
  | 'original-wordmark'
  | 'plain-wordmark'
  | 'line-wordmark';

type SVGBuilder = (query: {
  [k: string]: '';
  color: string;
  theme?: 'dark' | 'light';
  version?: IconVersions;
  size?: number
}) => Promise<string>;

type IconsObj = {
  [k: string]: {
    defaults: {
      icon: number;
      color: string;
    };
    versions: IconVersions;
  };
}
