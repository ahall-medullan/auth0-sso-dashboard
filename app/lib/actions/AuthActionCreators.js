var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var AuthWebAPIUtils = require('../utils/AuthWebAPIUtils');

module.exports = {

  /**
   * @param  {string} token
   */
  authenticated: function(token) {
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_AUTHENTICATED,
      token: token
    });
    AuthWebAPIUtils.loadUserProfile(token);
  }

};
