import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { PrimaryButtonStyles, SecondaryButtonStyles } from "./buttonStyles";
import { fontsLib } from "../../styles";

type ButtonTypes = "primary" | "secondary";

export type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  buttonType?: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  isUppercase?: boolean;
};

type StyledButtonProps = {
  $rounded?: boolean;
  $buttonType?: ButtonTypes;
  $disabled?: boolean;
  $isUppercase?: boolean;
};

const renderChildrenWithIcon = (
  children: ReactNode,
  icon: ReactNode,
): JSX.Element => (
  <StyledChildrenWithIcon>
    <span className="icon-container">{icon}</span>
    {children}
  </StyledChildrenWithIcon>
);

const getStyleBasedOnType = (customType: ButtonTypes | undefined) => {
  if (customType === "secondary") return SecondaryButtonStyles;
  return PrimaryButtonStyles;
};

const Button = ({
  children,
  icon,
  rounded,
  buttonType,
  disabled,
  onClick,
  isUppercase,
}: ButtonProps): JSX.Element => (
  <StyledButton
    className="bg-blue-600"
    onClick={onClick}
    $rounded={rounded}
    $disabled={disabled}
    $buttonType={buttonType}
    $isUppercase={isUppercase}
    disabled={disabled}
  >
    {icon ? renderChildrenWithIcon(children, icon) : children}
  </StyledButton>
);

const StyledChildrenWithIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-container {
    display: flex;
    margin-right: 8px;
    width: 25px;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  font-family: ${fontsLib.sourceSansPro};
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 5px 10px;

  ${({ $buttonType }) => getStyleBasedOnType($buttonType)}
  ${({ $rounded }) =>
    $rounded &&
    `
			border-radius: 30px;
		`}
  ${({ $disabled }) =>
    $disabled &&
    `
		pointer-events: all !important;
			cursor: not-allowed;
			opacity: 0.3;
		`}
  ${({ $isUppercase }) =>
    $isUppercase &&
    `
		text-transform: uppercase;
		`}
`;

export default Button;
