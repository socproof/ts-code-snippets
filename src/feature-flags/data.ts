export default {
  "my_flag": true,
  "other_flag": false,
} as FeatureFlag;

export type FeatureFlag = {[key: string]: boolean}
