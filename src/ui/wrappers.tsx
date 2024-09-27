type ContentWrapperProps = { children: React.ReactNode };

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="max-w-[1400px] m-auto overflow-hidden lg:px-3 px-4 ">{children}</div>;
};

export default ContentWrapper;