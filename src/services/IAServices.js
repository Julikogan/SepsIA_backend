import axios from 'axios';

export const enviarDatosIA = async (datosPaciente) => {
  try {
    const response = await axios.post('https://sepsia-visual.onrender.com/analizar', datosPaciente);
    return response.data;
  } catch (error) {
    console.error('Error al conectar con la IA:', error.message);
    throw new Error('Error al obtener respuesta de la IA');
  }
};
