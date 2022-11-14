interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string | JSX.Element;
}

const Heading = ({ level, children }: HeadingProps): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
