/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { memo } from 'react';
import Color from '../styles/colors/Color';

interface DarkLayerProps {
  /** z-index 속성을 설정합니다. */
  zIndex: number;
  // /** Layer 위에 표시될 컴포넌트 기본 z-index는 DarkLayer의 z-index +10 입니다. */
  // children: React.ReactNode;
}

interface StyledDarkLayerProps extends DarkLayerProps {}

/**
 * `DarkLayer`는 화면 전체를 어둡고 반투명한 Layer로 덮습니다.
 */
function DarkLayer({ zIndex }: DarkLayerProps) {
  return <StyledDarkLayer zIndex={zIndex} />;
}

DarkLayer.defaultProps = {
  zIndex: 1000,
};

const StyledDarkLayer = styled.div`
  z-index: ${(props: StyledDarkLayerProps) => props.zIndex};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default memo(DarkLayer);
