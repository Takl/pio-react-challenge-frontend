const subTestidInit = (testid: string): ((subTestid: string) => string) => (
  subTestid: string
): string => `${testid}-${subTestid}`;

export default subTestidInit;
