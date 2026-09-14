import { View, Text, StyleSheet } from 'react-native';

export default function PantallaCalendario() {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>🏋️ Registro de Cargas</Text>
      <Text style={estilos.subtitulo}>Aquí mapearemos tus rutinas y recomendaciones de IA.</Text>
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
    color: '#FF9800',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
  },
});