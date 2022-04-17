import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <section className='blogs'>
      <div className='container'>
        <div className='blog'>
          <h2>Difference between Authentication and Authorization.</h2>
          <p>
            Authentication is the process of checking identity of an user to
            give the access to the system. Authorization is the process of
            giving particular access to the resources based on the user's rank.
            Authentication is always the first step. Authorization is done after
            authentication. Authentication indicates who the user or person is.
            On the other hand, authorization indicates what permission the user
            or person have. Normally a user has to prove his/her identity by
            providing specific secured information like username, password, OTP,
            biometric information etc. But authorization is provided by the
            authority after confirming his/her identity.
          </p>
        </div>
        <div className='blog'>
          <h2>
            Why am I using firebase? What other options do I have to implement
            authentication?
          </h2>
          <p>
            Firebase provides us easy solution to integrate authentication
            system in our mobile or web applications. If we want to build a
            custom authentication system it will need much more time and hard
            work to gain firebase level features. And also it is also a secure
            platform. We don't have to think about our application and user's
            security, firebase ensures that. Firebase is not the only auth
            provider in the market. They are plenty of options. Some popular
            auth providers are:
          </p>
          <ul>
            <li>Okta</li>
            <li>Auth0</li>
            <li>Cognito</li>
            <li>Userfront</li>
          </ul>
        </div>
        <div className='blog'>
          <h2>
            What other services does firebase provide other than authentication?
          </h2>
          <p>
            Firebase provides verity of tools for developing apps and web
            services. The most use services are:
          </p>
          <ul>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Cloud Storage</li>
            <li>Firebase Hosting</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
