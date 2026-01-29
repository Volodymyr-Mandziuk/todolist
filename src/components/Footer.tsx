type FooterProps = {
  length: number;
};

const Footer = ({length}: FooterProps) => {
  const year = new Date();
  return <div className="footer">
  <p className="total-items">
    Total {length} {length <= 1 ?  "item" : "items"} 
  </p>
  <p className="year">
    {year.getFullYear()}
  </p>
  </div>;
};

export default Footer;
