import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.primary ? props.theme.colors.primary : `${props.theme.colors.primary}80`)};
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  height: 16px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  height: 16px;
  overflow: hidden;
`;

export default StyledProgress;
