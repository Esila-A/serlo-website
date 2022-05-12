import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing_heading">
        <h1 className="landing_heading--hOne">
          Potrzebujesz szybko i jakościowo wykonanego cylkinowania podłóg?
          <br />A może szukasz kogoś, kto pierwszorzędnie ułoży kafelki lub
          panele?
        </h1>
        <h2 className="landing_heading--hTwo">
          <span>Firma Serlo</span> oferuje profesjonalne wykonanie tych oraz
          wielu innych usług!
        </h2>
        <p className="landing_heading--p">
          Nie wachaj się i zadzwoń lub napisz. Odpowiemy na każde pytanie.
        </p>
        <NavLink to="/contact" className="button">
          SKONTAKTUJ SIĘ
        </NavLink>
      </div>
      <div className="landing_about">
        <h3 className="landing_about--heading">O nas</h3>
        <p className="landing_about--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus
          sem, dictum eget tincidunt quis, vehicula lobortis sem. Fusce
          malesuada nunc nec tellus rhoncus finibus. Ut aliquet odio ac ligula
          aliquam, id tristique magna finibus. Fusce vitae orci tristique,
          dictum dui id, maximus augue. Vestibulum quam libero, rutrum nec purus
          sit amet, laoreet aliquet est. Vivamus aliquet nulla enim. Suspendisse
          potenti. Etiam volutpat, sem ut faucibus egestas, urna mauris congue
          quam, ut vehicula neque justo ac dolor. Maecenas orci neque, accumsan
          eget tellus sed, tempor convallis velit. Praesent a est sem. In a
          tortor ut quam tempus viverra. Etiam vel erat at ex posuere hendrerit.
          Cras rhoncus non ipsum at aliquam. Maecenas congue dolor non dui
          interdum semper.
          <br />
          <br />
          Nullam vel vehicula odio. Mauris dignissim nisi vitae ante porttitor
          tincidunt. Mauris mattis sapien tellus, at aliquam tortor interdum sit
          amet. Sed vel lobortis ante. Ut malesuada sodales sem id ullamcorper.
          Praesent dignissim dui egestas risus eleifend, vel ullamcorper metus
          mattis. Praesent eu orci mollis, eleifend velit quis, eleifend leo.
          Cras facilisis elit sagittis dui molestie tincidunt. Phasellus auctor
          sed nibh quis mollis. Nunc a semper lectus. Praesent tempus faucibus
          tellus id consectetur. Nam tellus diam, hendrerit non luctus posuere,
          venenatis sit amet ligula. 
          <br />
          <br />
          Curabitur ac quam sollicitudin, porttitor mi sed, vulputate massa.
          Proin sed orci dolor. Fusce fringilla dui sit amet leo porttitor
          pulvinar eget eu risus. Suspendisse tempor lacus sem, eget fringilla
          felis scelerisque sit amet. Aliquam vel facilisis velit. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec faucibus
          pellentesque nisl. Maecenas vel scelerisque quam. Morbi in vestibulum
          lorem. Etiam eget semper purus, a aliquet nulla. Cras pharetra libero
          tortor, accumsan venenatis massa tincidunt non.
        </p>
      </div>
    </div>
  );
};

export default Landing;
