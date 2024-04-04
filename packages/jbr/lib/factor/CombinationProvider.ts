/**
 * Provides factor combinations.
 */
// eslint-disable-next-line ts/naming-convention
export interface CombinationProvider {
  /**
   * If the generated/ directory is reused across combinations.
   */
  commonGenerated: boolean;
  getFactorCombinations: () => FactorCombination[];
}

export type FactorCombination = Record<string, any>;
