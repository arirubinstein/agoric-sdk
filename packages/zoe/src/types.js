/// <reference types="ses"/>

/**
 * @template {string} H - the name of the handle
 * @typedef {H & {}} Handle A type constructor for an opaque type
 * identified by the H string. This uses an intersection type
 * ('MyHandle' & {}) to tag the handle's type even though the actual
 * value is just an empty object.
 */

/**
 * @typedef {string} Keyword
 * @typedef {Handle<'Invitation'>} InvitationHandle - an opaque handle for an invitation
 * @typedef {Record<Keyword,Issuer>} IssuerKeywordRecord
 * @typedef {Record<Keyword,ERef<Issuer>>} IssuerPKeywordRecord
 * @typedef {Record<Keyword,Brand>} BrandKeywordRecord
 */

/**
 * @typedef {Object} StandardTerms
 * @property {IssuerKeywordRecord} issuers - record with
 * keywords keys, issuer values
 * @property {BrandKeywordRecord} brands - record with keywords
 * keys, brand values
 *
 * @typedef {StandardTerms & Record<string, any>} AnyTerms
 *
 * @typedef {Object} InstanceRecord
 * @property {Installation} installation
 * @property {Instance} instance
 * @property {AnyTerms} terms - contract parameters
 
 *
 * @template {AssetKind} [K=AssetKind]
 * @typedef {Object} IssuerRecord
 * @property {Brand<K>} brand
 * @property {Issuer<K>} issuer
 * @property {K} assetKind
 * @property {any} [displayInfo]
 *
 * @typedef {AmountKeywordRecord} Allocation
 * @typedef {Record<Keyword,AmountMath>} AmountMathKeywordRecord
 */

/**
 * @typedef {Payment<'set'>} Invitation
 */
