import Form from "./form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_heading">
        <h2 className="contact_heading--h2">KONTAKT</h2>
        <h3 className="contact_heading--h3">
          Śmiało pisz lub dzwoń w sprawie jakichkolwiek pytań lub porad. Bardzo
          chętnie odpowiemy i doradzimy :)
        </h3>
      </div>
      <div className="contact_details">
        <div>
          <h3 className="contact_details--headlines">TELEFON</h3>
          <p className="contact_details--paragraph">+48 510 573 865</p>
        </div>
        <div>
          <h3 className="contact_details--headlines">EMAIL</h3>
          <p className="contact_details--paragraph">kontakt@serlo.pl</p>
        </div>
        <div>
          <h3 className="contact_details--headlines">FACEBOOK</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100079474383115"
            className="contact_details--link"
          >
            kliknij
          </a>
        </div>
      </div>
      <div className="contact_information">
        <div>
          <h4 className="contact_information--h4">DANE FIRMY</h4>
          <br />
          <p className="contact_information--p">
            NAZWA: Firma Serlo
            <br />
            NIP: XXXXXXXXX
            <br />
            REGON: XXXXXXXX
            <br />
            ADRES: Tadeusza Gajcego 7/156, 01-944 Warszawa
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
