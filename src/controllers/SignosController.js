import axios from 'axios'
import { crearSignoVital, guardarResultadoIA } from '../services/SignosServices.js'

export const registrarSignosVitales = async (req, res) => {
  try {
    const { presion, horario } = req.body
// Validar datos obligatorios
    if (!presion || !horario) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    
    console.log('Datos recibidos:', req.body);
    
    const nuevoSigno = await crearSignoVital({
      presion,
      horario: new Date(horario)
    })

const respuestaIA = { data: { porcentaje: Math.random() * 100 } }

    const resultado = await guardarResultadoIA({
     id_signo_vital: nuevoSigno.id,
     resultado: respuestaIA.data.porcentaje // Remove id_paciente if not needed
   });

    res.status(201).json({ signo: nuevoSigno, resultado })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al registrar signos vitales' })
  }
}

// Llamada a la IA (reemplazar URL con la real)
/* const respuestaIA = await axios.post('http://localhost:5000/analizar', {
      presion,
      horario,
      id_paciente
    })*/
//simulacion temporal: