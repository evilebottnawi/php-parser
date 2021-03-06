/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "clone";

/**
 * Defines a clone call
 * @constructor Clone
 * @extends {Statement}
 * @property {Expression} what
 */
module.exports = Statement.extends(KIND, function Clone(what, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
});
