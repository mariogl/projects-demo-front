export interface TextFieldProps {
  id: string;
  label: string;
  caption?: string;
  inline?: boolean;
  error?: boolean;
  disabled?: boolean;
  type?: "text" | "password";
}
