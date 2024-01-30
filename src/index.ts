type Widen<Key extends PropertyKey> = Key extends string
  ? string
  : Key extends number
    ? number
    : symbol;

export function match<const T extends Record<PropertyKey, unknown>>(
  key: keyof T,
  patterns: T,
): T[keyof T] {
  return patterns[key];
}

export function looseMatch<const T extends Record<PropertyKey, unknown>>(
  key: Widen<keyof T>,
  patterns: T,
): T[keyof T] | undefined {
  return patterns[key];
}
