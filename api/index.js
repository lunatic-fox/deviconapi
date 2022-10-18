/**
 @author Josélio Júnior <joseliojrx25@gmail.com>
 @copyright Josélio Júnior (Lunatic Fox) 2022
 @license MIT
*//***/

const SVGBuilder = require('../src/builder');

module.exports = async (req, res) => {
  SVGBuilder(req.query)
    .then(svg => {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.end(svg);
    });
};
