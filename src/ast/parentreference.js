/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "parentreference";

/**
 * Defines a class reference node
 * @constructor ParentReference
 * @extends {Reference}
 */
const ParentReference = Reference.extends(KIND, function ParentReference(
  docs,
  location
) {
  Reference.apply(this, [KIND, docs, location]);
});
module.exports = ParentReference;
