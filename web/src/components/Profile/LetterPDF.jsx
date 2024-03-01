import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import HogwartsShield from '../../images/logo.png';
import FilliusSignature from '../../images/filius.webp';

function LetterPDF({ userName }) {
  Font.register({
    family: 'Princess Sofia',
    src: {
      local: 'Princess Sofia',
      url: 'http://fonts.gstatic.com/s/princesssofia/v4/8g5l8r9BM0t1QsXLTajDe64AS0QnXBppPPVySeuncSg.ttf',
    },
    format: 'truetype',
  });
  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      fontSize: 18,
      padding: 30,
      color: 'black',
      fontFamily: 'Princess Sofia',
    },
    shield: {
      width: 50,
      marginHorizontal: 'auto',
    },
    school: {
      textAlign: 'center',
    },
    text: {
      marginVertical: 15,
      fontSize: 18,
      textAlign: 'center',
      color: 'black',
    },
    signature: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      marginVertical: 15,
    },
    signatureImg: {
      width: 100,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={HogwartsShield} style={styles.shield} />
        <Text style={styles.school}>Colegio Hogwarts</Text>
        <Text style={styles.school}>de Magia y hechicería</Text>
        <Text style={styles.text}>Estimado Sr./Sra {userName},</Text>
        <Text style={styles.text}>
          Nos complace informarle de que dispone de una plaza en el Colegio
          Hogwarts de Magia y Hechicería. Le adjuntamos la lista del equipo y
          los libros necesario. Las clases comienzan el 1 de Septiembre.
          Esperamos su lechuza antes del 31 de Julio.
        </Text>
        <Text style={styles.text}>Muy cordialmente,</Text>
        <View style={styles.signature}>
          <Image src={FilliusSignature} style={styles.signatureImg} />
          <Text>Fillius Flitwick</Text>
        </View>
        <Text>Director adjunto.</Text>
      </Page>
    </Document>
  );
}

export default LetterPDF;