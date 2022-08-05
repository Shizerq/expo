import { css } from '@emotion/react';
import { theme, spacing } from '@expo/styleguide';
import React from 'react';

import { SidebarGroup, SidebarSection, VersionSelector } from './index';

import * as Constants from '~/constants/theme';
import { NavigationType, NavigationRoute } from '~/types/common';

const STYLES_SIDEBAR = css`
  padding: 16px 20px 16px 16px;
  width: 280px;
  position: relative;
  background: ${theme.background.secondary};

  @media screen and (max-width: ${Constants.breakpoints.mobile}) {
    width: 100%;
  }
`;

const STYLES_SIDEBAR_FADE = css`
  background: linear-gradient(${theme.background.secondary} 20%, transparent);
  height: 20px;
  width: 274px;
  position: fixed;
  margin-top: -${spacing[4]}px;
  left: 0;
  z-index: 10;
  pointer-events: none;

  @media screen and (max-width: ${Constants.breakpoints.mobile}) {
    display: none;
  }
`;

type SidebarProps = React.PropsWithChildren<{
  routes?: NavigationRoute[];
}>;

export type SidebarNodeProps = {
  route: NavigationRoute;
  parentRoute?: NavigationRoute;
};

export const Sidebar = ({ routes = [] }: SidebarProps) => {
  const renderTypes: Record<NavigationType, React.ComponentType<SidebarNodeProps> | null> = {
    section: SidebarSection,
    group: SidebarGroup,
    page: null, // Pages are rendered inside groups and should not be rendered directly
  };

  return (
    <nav css={STYLES_SIDEBAR} data-sidebar>
      <div css={[STYLES_SIDEBAR_FADE]} />
      <VersionSelector />
      {routes.map(route => {
        const Component = renderTypes[route.type];
        return !!Component && <Component key={`${route.type}-${route.name}`} route={route} />;
      })}
    </nav>
  );
};
