/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

import { VercelResponse } from '@vercel/node';
import { Query } from '../src/@builder';
import SVGBuilder from '../src';

module.exports = async (req: { query: Query }, res: VercelResponse) => {
  SVGBuilder(req.query)
    .then(svg => {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.end(svg);
    });
};
