import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6C757D', // Gris oscuro
    background: '#b5e5f5', // Gris claro
    card: '#FFFFFF', // Blanco
    text: '#333333', // Negro
    border: '#CCCCCC', // Gris claro
    secondary: '#6C757D',
    title: '#17171B',
    subtitle: '#17171B',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    color: theme.colors.title,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 34,
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    marginVertical: 20,
  },button: {
    backgroundColor: '#3a86ff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },input: {
    borderColor: '#7E5DE0',
    backgroundColor:'#E1E9F5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
  },
});