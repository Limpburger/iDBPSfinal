import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const saveSvgToFirestore = (svgData, userId) => {
    firebase.firestore().collection('svgs').add({
      userId: userId,
      svg: svgData,
    })
      .then((docRef) => {
        console.log('SVG saved with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error saving SVG:', error);
      });
  };
  
