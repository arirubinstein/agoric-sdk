import { E } from '@endo/eventual-send';
import { assert, details as X } from '@agoric/assert';
import { Far } from '@endo/marshal';
import { makeIssuerKit, AmountMath } from '../../../src/index.js';

export function buildRootObject(vatPowers, vatParameters) {
  const arg0 = vatParameters.argv[0];

  function testBasicFunctionality(aliceMaker) {
    vatPowers.testLog('start test basic functionality');
    const { mint: moolaMint, issuer, brand } = makeIssuerKit('moola');
    const moolaPayment = moolaMint.mintPayment(AmountMath.make(brand, 1000n));

    const aliceP = E(aliceMaker).make(issuer, brand, moolaPayment);
    return E(aliceP).testBasicFunctionality();
  }

  const obj0 = Far('root', {
    async bootstrap(vats) {
      switch (arg0) {
        case 'basicFunctionality': {
          const aliceMaker = await E(vats.alice).makeAliceMaker();
          return testBasicFunctionality(aliceMaker);
        }
        default: {
          assert.fail(X`unrecognized argument value ${arg0}`);
        }
      }
    },
  });
  return obj0;
}
