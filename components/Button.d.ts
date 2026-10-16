interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  onClick?: () => void;
  arrow?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
