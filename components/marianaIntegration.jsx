import React from 'react';

const MarianaIntegration = ({ path, login, logout, hasBreadcrumbs, sections, activeProduct, activeSection, classroom, classType, instructors, locations, loggedInText = "My Account", loggedOutText = "Login" }) => {
  // Build the query parameters based on the props
  let queryParams = [];
  if (login) queryParams.push('login=true');
  if (logout) queryParams.push('logout=true');
  if (hasBreadcrumbs === false) queryParams.push('hasBreadcrumbs=false');
  if (sections) queryParams.push(`sections=${sections}`);
  if (activeProduct) queryParams.push(`activeProduct=${activeProduct}`);
  if (activeSection) queryParams.push(`activeSection=${activeSection}`);
  if (classroom) queryParams.push(`classroom=${classroom}`);
  if (classType) queryParams.push(`classType=${classType}`);
  if (instructors) queryParams.push(`instructors=${instructors}`);
  if (locations) queryParams.push(`locations=${locations}`);

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  const dataMarianaIntegrations = path ? `${path}${queryString}` : '';

  return (
    <a
      data-mariana-auth-link
      href={path}
      data-mariana-logged-out-text={loggedOutText}
      data-mariana-logged-in-text={loggedInText}
    ></a>
  );
};

export default MarianaIntegration;
