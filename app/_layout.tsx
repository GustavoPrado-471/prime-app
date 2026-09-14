import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LayoutNavegacion() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF5722', // Color del ícono seleccionado (Naranja)
        tabBarInactiveTintColor: '#888888', // Color de íconos no seleccionados (Gris)
        tabBarStyle: { backgroundColor: '#1E1E2C' }, // Fondo de la barra (oscuro)
        headerStyle: { backgroundColor: '#1E1E2C' }, // Fondo del encabezado superior
        headerTintColor: '#FFFFFF', // Color del texto del encabezado
      }}
    >
      {/* Pestaña 1: Feed Social */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Muro Social',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña 2: Calendario */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pestaña 3: Perfil */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}