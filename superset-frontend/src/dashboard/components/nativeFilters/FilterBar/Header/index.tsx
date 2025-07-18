/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable no-param-reassign */
import { css, styled, t } from '@superset-ui/core';
import { memo, FC } from 'react';
import { Icons } from '@superset-ui/core/components/Icons';
import { Button } from '@superset-ui/core/components';
import { getFilterBarTestId } from '../utils';
import FilterBarSettings from '../FilterBarSettings';

const TitleArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${theme.sizeUnit * 2}px ${theme.sizeUnit * 2}px;

    & > span {
      font-size: ${theme.fontSizeLG}px;
      flex-grow: 1;
      font-weight: ${theme.fontWeightStrong};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}
`;

const HeaderButton = styled(Button)`
  padding: 0;
`;

const Wrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.sizeUnit * 3}px ${theme.sizeUnit * 2}px ${
      theme.sizeUnit
    }px;
  `}
`;

type HeaderProps = {
  toggleFiltersBar: (arg0: boolean) => void;
};

const Header: FC<HeaderProps> = ({ toggleFiltersBar }) => (
  <Wrapper>
    <TitleArea>
      <span>{t('Filters')}</span>
      <FilterBarSettings />
      <HeaderButton
        {...getFilterBarTestId('collapse-button')}
        buttonStyle="link"
        buttonSize="xsmall"
        onClick={() => toggleFiltersBar(false)}
      >
        <Icons.VerticalAlignTopOutlined
          iconSize="xl"
          css={css`
            transform: rotate(-90deg);
          `}
        />
      </HeaderButton>
    </TitleArea>
  </Wrapper>
);

export default memo(Header);
