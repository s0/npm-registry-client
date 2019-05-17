import * as rp from 'request-promise-native';
import * as types from './types';

const REGISTRY = 'https://registry.npmjs.org/';

function request(uri: string) {
  return rp({
    uri: REGISTRY + uri,
    json: true
  });
}

export function getPackageMeta(pkg: string) {
  return request(pkg) as rp.RequestPromise<types.PackageMetadata>;
}
