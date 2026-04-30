import { type ReactNode } from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
}
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  error?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  defaultValue?: string;
  required?: boolean;
}

type DropdownItem = {
  id: string;
  label: ReactNode;
  onClick?: () => void;
  className?: string;
  separator?: boolean;
};

export interface DropdownProps {
  items: DropdownItem[];
  trigger: ReactNode;
}
