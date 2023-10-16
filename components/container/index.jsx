const Container = ({ children, className }) => {
  return <section className={`max-w-6xl mx-auto py-10 ${className}`}>{children}</section>;
};

export default Container;
