import { View, Text, StyleSheet } from 'react-native';

export default function PantallaPerfil() {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>⚡ Tu Perfil y Rachas</Text>
      <Text style={estilos.subtitulo}>Aquí diseñarás tu Avatar y verás tus días en racha.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
  },
});