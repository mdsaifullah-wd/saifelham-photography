import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCOGzFq1LuNPEeeWDx89znxx9PcgUjuiKY',
  authDomain: 'independent-service-prov-cc41b.firebaseapp.com',
  projectId: 'independent-service-prov-cc41b',
  storageBucket: 'independent-service-prov-cc41b.appspot.com',
  messagingSenderId: '917375679961',
  appId: '1:917375679961:web:b4bda641eea25cacb5adc8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
