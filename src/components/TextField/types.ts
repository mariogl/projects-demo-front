export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  caption?: string;
  inline?: boolean;
  error?: boolean;
}

export type TextFieldStyledProps = Partial<TextFieldProps>;
