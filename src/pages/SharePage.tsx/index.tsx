import { MainContainer, ImageContainer, TextContainer } from './styles';

export default function SharePage() {
  const shareUrl = 'No se encontró la página web';
  const qrPath = false ? '/api/qr' : 'default-qr.png';

  return (
    <MainContainer>
      <ImageContainer>
        <img src={qrPath} alt="imagen qr" />
      </ImageContainer>
      <TextContainer>
        <p>
          Si el teléfono del alumno no cuenta
          con lector de QR puede ingresar
          a la siguiente página web:
        </p>
        <br />
        <h2>{shareUrl}</h2>
        <br />
        <p>
          IMPORTANTE: La computadora del profesor y
          este dispositivo deben estar
          conectados a la misma red WiFi.
        </p>
      </TextContainer>
    </MainContainer>
  );
}
