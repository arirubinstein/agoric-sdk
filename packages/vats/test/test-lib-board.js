// @ts-check
import { test } from '@agoric/swingset-vat/tools/prepare-test-env-ava.js';

import { Far } from '@endo/far';
import { makeBoard } from '../src/lib-board.js';

test('makeBoard', async t => {
  const board = makeBoard();

  const obj1 = Far('obj1', {});
  const obj2 = Far('obj2', {});

  t.deepEqual(board.ids(), [], `board is empty to start`);

  const idObj1 = board.getId(obj1);
  t.is(idObj1, 'board0371');
  t.deepEqual(board.ids(), [idObj1], `board has one id`);

  const idObj2 = board.getId(obj2);
  t.is(idObj2, 'board0592');
  t.deepEqual(board.ids().length, 2, `board has two ids`);

  t.deepEqual(board.getValue(idObj1), obj1, `id matches value obj1`);
  t.deepEqual(board.getValue(idObj2), obj2, `id matches value obj2`);

  t.deepEqual(board.getId(obj1), idObj1, `value matches id obj1`);
  t.deepEqual(board.getId(obj2), idObj2, `value matches id obj2`);

  const board2 = makeBoard(undefined, { prefix: 'tooboard' });
  const idObj1b = board2.getId(obj1);
  t.is(idObj1b, 'tooboard311');
  const idObj2b = board2.getId(obj2);
  t.is(idObj2b, 'tooboard012');
});
