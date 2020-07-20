import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Box, Flex } from '../Core';
import { useToggle } from '../hooks';

const MenuExpansionContext = React.createContext({ isExpanded: false });

interface MainNavProps {
  /**
   * An array of navigation elements.
   *
   * Please use the accompanying `<NavigationElement />` component in order to ensure
   * proper styling of the `<MainNav />`.
   */
  navigations: React.ReactNode[];
}
/**
 * Main navigation of a site. Ideally, only one should be used per application.
 * You would ideally wrap your application layout with the MainNav.
 */
const MainNav: React.FC<MainNavProps> = ({ navigations, children }) => {
  const { toggle, isActive: isExpanded } = useToggle();

  return (
    <MenuExpansionContext.Provider value={{ isExpanded }}>
      <Box
        className="MainNav"
        tx="mainnav"
        variant="normal"
        sx={{
          paddingLeft: '80px',
        }}
      >
        <Box
          className="MainNav__container"
          sx={{
            left: 0,
            position: 'fixed',
            width: '320px',
            height: '100%',
            transform: isExpanded ? 'translateX(0px)' : 'translateX(-240px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            boxShadow: isExpanded
              ? '10px 0px 30px #00000029'
              : '0 0 0.5em rgba(0,0,0,0.15)',
            bg: 'mainNav.background',
            overflowX: 'hidden',
            transition:
              'transform ease-in-out 200ms, box-shadow ease-in-out 200ms',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '14px',
              top: '14px',
              p: 3,
              color: 'grey',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Menu
          </Box>
          <Flex
            onClick={() => {
              console.log('expand!');
              toggle();
            }}
            alignItems="center"
            justifyContent="center"
            sx={{
              bg: 'primary',
              px: 2,
              py: 1,
              mt: 3,
              mr: 3,
              width: 'fit-content',
              borderRadius: 'radius-1',
              cursor: 'pointer',
              mb: 5,
              minWidth: '44px',
              minHeight: '44px',
              fontSize: '24px',
            }}
          >
            <FontAwesomeIcon
              icon={isExpanded ? faTimes : faBars}
              color="white"
            />
          </Flex>
          <Box
            sx={{
              transform: isExpanded ? 'translateX(0px)' : 'translateX(186px)',
              transition: 'transform ease-in-out 200ms',
            }}
          >
            {navigations.map((navigation, index) => (
              <React.Fragment key={index}>{navigation}</React.Fragment>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            pt: 3,
            ml: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </MenuExpansionContext.Provider>
  );
};

interface NavigationElement {
  title: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}
const NavigationElement: React.FC<NavigationElement> = ({
  title,
  icon,
  isSelected = false,
  ...restProps
}) => {
  const { isExpanded } = React.useContext(MenuExpansionContext);

  return (
    <Flex
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '52px',
        width: '270px',
        mt: 3,
        pr: 2,
        pl: '32px',
        position: 'relative',
        bg: isSelected
          ? 'mainNav.navigationElementSelected'
          : 'mainNav.background',
        cursor: 'pointer',
        color: 'text',
        textDecoration: 'none',
        '&:hover': {
          bg: 'mainNav.navigationElementSelected',
        },
      }}
      {...restProps}
    >
      <Box
        as="span"
        sx={{
          fontSize: '24px',
          minWidth: '64px',
          color: isSelected ? 'primary' : 'text',
        }}
      >
        {icon}
      </Box>{' '}
      <Box
        as="span"
        sx={{
          display: isExpanded ? 'initial' : 'initial',
          fontSize: 'large',
        }}
      >
        {title}
      </Box>
      {isSelected && (
        <Box
          sx={{
            position: 'absolute',
            width: '10px',
            bg: 'primary',
            height: '100%',
            transform: isExpanded ? 'translateX(228px)' : 'translateX(42px)',
            transition: 'transform ease-in-out 200ms',
            borderTopLeftRadius: 'radius-2',
            borderBottomLeftRadius: 'radius-2',
          }}
        />
      )}
    </Flex>
  );
};

export { MainNav, NavigationElement };
