import { ComparisonResult } from './ComparisonResult';
import { Comparable } from './Comparable';

export function ComparableCompare<T extends Comparable<T>>(x: T, y: T): ComparisonResult {
  return x.compareTo(y);
}