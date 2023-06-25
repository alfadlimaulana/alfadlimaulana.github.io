function Footer() {
  return (
    <footer>
      <div className="container text-center py-5">
        <h2 className="mb-3">Get In Touch</h2>
        <div className="sosmed d-flex justify-content-center gap-2">
          <a href="" className="bg-secondary p-3 rounded-3">
            <i className="fa-regular fa-envelope fa-2xl" title="Email"></i>
          </a>
          <a href="" className="bg-secondary p-3 rounded-3">
            <i className="fa-brands fa-instagram fa-2xl" title="Instagram"></i>
          </a>
          <a href="" className="bg-secondary p-3 rounded-3">
            <i className="fa-brands fa-linkedin-in fa-2xl" title="LinkedIn"></i>
          </a>
        </div>
        <p className="mt-4">©2023. Alfadli Maulana Siddik. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
