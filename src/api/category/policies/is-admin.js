'use strict';

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In is-admin policy.')
  // console.log(config);
  console.log(policyContext);

  if (policyContext.state.user.role.name == 'Authenticated') {
    return true;
  }

  return false;
};
