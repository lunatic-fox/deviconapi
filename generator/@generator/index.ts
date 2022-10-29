import { IconVersions } from '../../src/@builder';

export type DeviconsArray = [{
  name: string,
  color: string
}];

export type IconsObj = {
  [k: string]: {
    defaults: {
      icon: number;
      color: string;
    };
    versions: IconVersions;
  };
}