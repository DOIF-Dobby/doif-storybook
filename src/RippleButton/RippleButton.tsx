/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';
import { theme } from '../styles/themes/themes';
import './RippleButton.css';

type RippleButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

// 멍청했다....
// ripple 효과를 주는 span은 버튼 안에서 보여주고 숨기고 하는 것이 아니라
// 버튼을 클릭하면 그냥 계속 새로 만들고 setTimeout함수에서 일정 시간 뒤에 지워야 하는 것이다.

function RippleButton({ children, onClick }: RippleButtonProps) {
  // const [isRippling, setIsRippling] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const { x, y } = coords;

    if (x !== -1 && y !== -1) {
      // setIsRippling(true);

      const timeout = setTimeout(() => {
        setCoords({ x: -1, y: -1 });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [coords]);

  // useEffect(() => {
  //   if (!isRippling) {
  //     setCoords({ x: -1, y: -1 });
  //   }
  // }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const rect: DOMRect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        setCoords({ x, y });

        onClick && onClick(e);
      }}>
      {coords.x !== -1 && coords.y !== -1 && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}></span>
      )}
      <span className="content">{children}</span>
    </button>
  );
}

export default RippleButton;
