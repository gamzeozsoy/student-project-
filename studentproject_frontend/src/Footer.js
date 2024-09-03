const images = {
    gib2: require("./img/gib2.png"),
    gib3: require("./img/gib3.png"),
  };
  
  const footerStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  };
  
  const Footer = () => {
    return (
      <footer id="footer" style={footerStyle}>
        <div class="footer-newsletter"></div>
  
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact" style={footerStyle}>
                <a href="">
                  <img
                    src={images.gib2}
                    alt="Gib2"
                    width="70"
                    style={{
                      marginLeft: "20px",
                    }}
                  />
  
                  <img
                    src={images.gib3}
                    alt="Gib3"
                    width="70"
                    style={{ marginLeft: "20px" }}
                  />
                </a>
              </div>
  
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Kurum içi Linkler</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://www.hmb.gov.tr">
                      T.C. Hazine ve Maliye Bakanlığı
                    </a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://www.gib.gov.tr/">Gelir İdaresi Başkanlığı</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://www.turkiye.gov.tr/">e-Devlet</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="http://www.vergibilinci.gov.tr/">Vergi Bilinci</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="http://vergihaftasi.gov.tr/">Vergi Haftası</a>
                  </li>
                </ul>
              </div>
  
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Hizmetler</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://ivd.gib.gov.tr">İnteraktif Vergi Dairesi</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://intvrg.gib.gov.tr">İnternet Vergi Dairesi</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://www.defterbeyan.gov.tr">Defter Beyan</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://hazirbeyan.gib.gov.tr">Hazır Beyan</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="https://gibux.gib.gov.tr/">GİBUX</a>
                  </li>
                </ul>
              </div>
  
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Sosyal Ağlar</h4>
                <p>
                  Bizi sosyal ağlar üzerinden takip ederek tüm gelişmelerden
                  haberdar olabilirsiniz.
                </p>
                <div class="social-links mt-3">
                  <a href="https://twitter.com/gibsosyalmedya" class="">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://tr-tr.facebook.com/gibsosyalmedya"
                    class="facebook"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gibsosyalmedya/"
                    class="instagram"
                  >
                    <i class="bx bxl-instagram"> </i>
                  </a>
                  <a
                    href="https://tr.linkedin.com/company/gibsosyalmedya"
                    class="linkedin"
                  >
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="container footer-bottom clearfix">
          <div class="copyright" style={footerStyle}>
            © Bu sitenin tüm hakları Gelir İdaresi Başkanlığına aittir.{" "}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  