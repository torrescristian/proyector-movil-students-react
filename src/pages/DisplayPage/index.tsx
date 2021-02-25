import CropRotateIcon from '@material-ui/icons/CropRotate';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Display, Img, Instructions, InstructionHighlighted } from './styles';

export default function DisplayPage() {
  const imagePath = 'default-image.gif';
  const handleClickFullscreen = () => {
    throw new Error('no implementation yet');
  };

  return (
    <Display>
      <Img
        className="display__img"
        src={imagePath}
        onClick={handleClickFullscreen}
      />
      <Instructions>
        <p>
          <br />
          <CropRotateIcon color="primary" />
          <br />
          Gire la pantalla para ocultar la barra de navegación
        </p>
        <p>
          <br />
          <TouchAppIcon color="secondary" />
          <br />
          Toque la{' '}
          <InstructionHighlighted>
            filmina
          </InstructionHighlighted>{' '}
          para verla en pantalla completa.
        </p>
        <p>
          <br />
          <ZoomInIcon color="action" />
          <br />
          <InstructionHighlighted>No</InstructionHighlighted> puede
          aumentar el tamaño
          <br /> de la imagen (hacer <em>zoom</em>) en pantalla completa.
        </p>
      </Instructions>
    </Display>
  );
}
