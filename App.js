import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Components/Navigation/Navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar color='dark' />
    </>
  );
};