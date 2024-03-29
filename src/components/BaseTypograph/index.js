export const BaseTypograph = ({ tag, children, className }) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children} </h4>}
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "small" && <small className={className}>{children}</small>}
    </>
  );
};
