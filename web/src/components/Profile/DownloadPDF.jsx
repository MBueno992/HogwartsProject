import { PDFDownloadLink } from '@react-pdf/renderer';
import LetterPDF from './LetterPDF';

function DownloadPDF({ userName }) {
  // const handlePreviewPDF = () => {
  //   const pdfWindow = window.open('', '_blank');
  //   pdfWindow.document.write(
  //     '<!DOCTYPE html><html><head><title>Vista previa del PDF</title></head><body>'
  //   );
  //   pdfWindow.document.write(
  //     '<iframe width="100%" height="100%" src="/path-to-your-pdf" frameborder="0"></iframe>'
  //   );
  //   pdfWindow.document.write('</body></html>');
  // };
  return (
    <div>
      {/* <button onClick={handlePreviewPDF}></button> */}
      <PDFDownloadLink
        document={<LetterPDF userName={userName} />}
        fileName="carta_hogwarts.pdf"
      >
        {({ loading }) =>
          loading ? (
            'Cargando documento...'
          ) : (
            <button>Descargar carta de Hogwarts</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default DownloadPDF;
