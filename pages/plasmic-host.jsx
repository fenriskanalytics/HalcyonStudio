import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import MarianaIntegration from '../components/MarianaIntegration'; // Adjust the path as necessary
import AuthButton from '../components/AuthButton'; // Adjust the path as necessary

// Register the MarianaIntegration component
registerComponent(MarianaIntegration, {
  name: 'MarianaIntegration',
  props: {
    path: 'string',
    login: 'boolean',
    logout: 'boolean',
    hasBreadcrumbs: 'boolean',
    sections: 'string',
    activeProduct: 'string',
    activeSection: 'string',
    classroom: 'string',
    classType: 'string',
    instructors: 'string',
    locations: 'string',
    loggedInText: 'string',
    loggedOutText: 'string'
  },
});

// Register the AuthButton component
registerComponent(AuthButton, {
  name: 'AuthButton',
  props: {}
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
