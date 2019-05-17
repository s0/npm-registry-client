/**
 * https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#dist
 */
export interface Dist {
  shasum: string;
  tarball: string;
}

/**
 * https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-version-object
 */
export interface AbbreviatedVersionMetadata {
  /** the package name */
  name: string;
  /** the version string for this version */
  version: string;
  /**  the deprecation warnings message of this version */
  deprecated?: any;
  /** a mapping of other packages this version depends on to the required semver ranges */
  dependencies?: {
    [id: string]: string | undefined;
  };
  /** an object mapping package names to the required semver ranges of optional dependencies */
  optionalDependencies?: {
    [id: string]: string | undefined;
  };
  /** a mapping of package names to the required semver ranges of development dependencies */
  devDependencies?: {
    [id: string]: string | undefined;
  };
  /** an array of dependencies bundled with this version */
  bundleDependencies?: any;
  /** a mapping of package names to the required semver ranges of peer dependencies */
  peerDependencies?: any;
  /** a mapping of bin commands to set up for this version */
  bin?: {
    [id: string]: string | undefined;
  };
  /** an array of directories included by this version */
  directories: any[];
  dist: Dist;
  engines?: {
    [id: string]: string | undefined;
  };
  /**
   * `true` if this version is known to have a shrinkwrap that must be used to install it;
   * `false` if this version is known not to have a shrinkwrap.
   * If this field is `undefined`,
   * the client must determine through other means if a shrinkwrap exists.
   */
  _hasShrinkwrap: boolean | undefined;
}

export interface ExtraVersionMetadata {
  types?: string;
}

/**
 * https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-metadata-format
 */
export interface AbbreviatedPackageMetadata {
  'dist-tags': {
    latest: string;
    [id: string]: string | undefined;
  };
  modified: string;
  name: string;
  versions: {
    [id: string]: AbbreviatedVersionMetadata & ExtraVersionMetadata | undefined;
  };
}


export interface PackageMetadata extends AbbreviatedPackageMetadata {
  description?: string;
}

export function isPackageMetadata(value: any): value is PackageMetadata {
  return (

    value['dist-tags'] && typeof value['dist-tags'].latest === 'string'

  );
}
