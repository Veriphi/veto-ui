import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons/faBorderAll';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { MainNav, NavigationElement } from '.';

export default {
  title: 'MainNav',
};

export const mainNav = () => (
  <div>
    <MainNav
      navigations={[
        <NavigationElement
          title="Dashboard"
          isSelected={true}
          icon={<FontAwesomeIcon icon={faBorderAll} />}
        />,
        <NavigationElement
          title="Explorer"
          icon={<FontAwesomeIcon icon={faWallet} />}
        />,
      ]}
    >
      <div>This is some content</div>
    </MainNav>
  </div>
);
