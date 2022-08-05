import { css } from '@emotion/react';
import { theme, spacing } from '@expo/styleguide';
import * as React from 'react';

import { CALLOUT } from '../Text';

type SidebarTitleProps = React.PropsWithChildren<object>;

export const SidebarTitle = ({ children }: SidebarTitleProps) => (
  <div css={STYLES_TITLE}>
    <CALLOUT weight="medium" theme="secondary">
      {children}
    </CALLOUT>
  </div>
);

const STYLES_TITLE = css({
  display: 'block',
  position: 'relative',
  marginBottom: spacing[2],
  borderBottom: `1px solid ${theme.border.default}`,
  marginLeft: spacing[6],
  marginRight: -spacing[5],
  paddingBottom: spacing[2],
  userSelect: 'none',
});
