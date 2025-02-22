import carLogo from "../../assets/icons8-car-96.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <div className="grid grid-flow-col gap-4">
        <img src={carLogo} alt="car-logo" />
      </div>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;