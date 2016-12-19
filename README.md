# Auth0 SSO Dashboard [![Build Status](https://travis-ci.org/auth0/auth0-sso-dashboard.svg)](https://travis-ci.org/auth0/auth0-sso-dashboard)

**NOTICE**: 
This project has been deprecated in favor of [the new Auth0 SSO Dashboard Extension](https://github.com/auth0-extensions/auth0-sso-dashboard-extension). [See the SSO Dashboard Extension Doc](https://auth0.com/docs/extensions/sso-dashboard) for more details.

This application allows Auth0 customers the ability to host a self-service Single-Sign-On (SSO) dashboard for employees or customers. This dashboard serves as a landing page for all apps that authenticate with Auth0 and support SSO, thus allowing a convenient way for users to access all important resources without the need to remember multiple URLs or repeatedly enter their credentials.

![App Dashboard](https://cloudup.com/cfENOYpKxfL+)

## Key features
* Landing page showing all apps that a user is allowed to access.
* Self-service user profile updates.
* Administrator interface for configuring roles, apps, and users.
* Completely customizable UI.

## Example Dashboard
You can see a full featured version of this dashboard running at https://ssodashboard.herokuapp.com. You can login with the username `publicdemo` and the password `TestUser123`. This will only show you the user side of the demo. For the admin portion, please deploy your own version of the dashboard as explained below.

> Note, the example dashboard uses a **demo account with fake apps** so clicking the links won't actually sign you into anything. If you want to try this for real, set up the dashboard with your Auth0 account and sign in to your apps.

## Install
Host your own version of the dashbaord on Heroku using the Heroku button.

In order to deploy to Heroku you will need:

1. An Auth0 account.
2. An Amazon S3 Bucket and access key for data storage
3. Create [a rule](/rules/IsAdminRule.js) to grant users admin access to the app.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-sso-dashboard)

For more details on [setup and deployment](https://github.com/auth0/auth0-sso-dashboard-sample/wiki/Setup) see the [instructions](https://github.com/auth0/auth0-sso-dashboard-sample/wiki/Setup) on the wiki.


## Usage
Usage of the user portion of the dashboard is fairly simple. It contains a list of icons that the user can click on that will take them to other applications. For instruction on [administration of the dashboard](https://github.com/auth0/auth0-sso-dashboard-sample/wiki/Administration) see the wiki.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
