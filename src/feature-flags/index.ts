import {FeatureFlagService} from "./feature-flag";

const FFservice = FeatureFlagService.instance();
(async () => {
  await FFservice.initConfig();
  if(FFservice.isEnabled('my_flag')) {
    console.log('my_flag turned on');
  }
  if(FFservice.isEnabled('other_flag')) {
    console.log('other_flag turned on');
  }
})();

