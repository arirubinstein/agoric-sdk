import type {
  MapStore,
  SetStore,
  StoreOptions,
  WeakMapStore,
  WeakSetStore,
} from '@agoric/store';

interface KindDefiner {
  <K, S>(
    tag: string,
    init: () => S,
    actualize: (state: S) => K,
    finish?: () => void,
  ): () => K;
}

export type VatData = {
  defineKind: KindDefiner;
  defineDurableKind: KindDefiner;

  makeKindHandle: (descriptionTag: string) => unknown;

  makeScalarBigMapStore: <K, V>(
    label: string,
    options?: StoreOptions,
  ) => MapStore<K, V>;
  makeScalarBigWeakMapStore: <K, V>(
    label: string,
    options?: StoreOptions,
  ) => WeakMapStore<K, V>;

  makeScalarBigSetStore: <K>(
    label: string,
    options?: StoreOptions,
  ) => SetStore<K>;
  makeScalarBigWeakSetStore: <K>(
    label: string,
    options?: StoreOptions,
  ) => WeakSetStore<K>;
};
