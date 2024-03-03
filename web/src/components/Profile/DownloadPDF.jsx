import { PDFDownloadLink } from '@react-pdf/renderer';
import LetterPDF from './LetterPDF';

function DownloadPDF({ userName }) {
  return (
    <div>
      <PDFDownloadLink
        document={<LetterPDF userName={userName} />}
        fileName="carta_hogwarts.pdf"
      >
        {({ loading }) =>
          loading ? (
            'Cargando documento...'
          ) : (
            <button className="mainProfile__list--option">
              Descargar carta de Hogwarts
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default DownloadPDF;
