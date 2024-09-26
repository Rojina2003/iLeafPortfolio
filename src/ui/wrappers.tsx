type ContentWrapperProps = { children: React.ReactNode };

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="max-w-[1301px] m-auto lg:px-3 px-6 ">{children}</div>;
};

export default ContentWrapper;