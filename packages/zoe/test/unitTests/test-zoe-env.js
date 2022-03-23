// @ts-check
/* global globalThis */
// eslint-disable-next-line import/no-extraneous-dependencies
import { test } from '@agoric/zoe/tools/prepare-test-env-ava.js';

// Does not import from a module because this is testing the global env
const { VatData } = globalThis;

test('harden from SES is in the zoe contract environment', t => {
  // @ts-ignore testing existence of function only
  harden();
  t.pass();
});

test('(mock) kind makers from SwingSet are in the zoe contract environment', t => {
  // @ts-ignore testing existence of function only
  VatData.defineKind();
  const kh = VatData.makeKindHandle();
  VatData.defineDurableKind(kh);
  t.pass();
});

test('(mock) store makers from SwingSet are in the zoe contract environment', t => {
  // @ts-ignore testing existence of function only
  VatData.makeScalarBigMapStore();
  VatData.makeScalarBigWeakMapStore();
  VatData.makeScalarBigSetStore();
  VatData.makeScalarBigWeakSetStore();
  t.pass();
});
