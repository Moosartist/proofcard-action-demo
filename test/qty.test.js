'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { cartTotal } = require('../src/cart');

test('quantity is multiplied into the total', () => {
  assert.strictEqual(cartTotal([{ priceCents: 250, qty: 4 }]), 1000);
});
