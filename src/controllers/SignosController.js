import axios from 'axios'
import { crearSignoVital } from '../services/SignosServices.js'

export const registrarSignosVitales = async (req, res) => {
  try {
    const { 
      frecuencia_cardiaca,
      presion_arterial,
      frecuencia_respiratoria,
      temperatura_corporal,
      saturacion_oxigeno,
      procalcitonina,
      lactato,
      proteina_creactiva,
      leucocitos,
      patologias_presentes,
      /*id_paciente*/
     } = req.body
// Validar datos obligatorios
    if (
      !frecuencia_cardiaca ||
      !presion_arterial ||
      !frecuencia_respiratoria ||
      !temperatura_corporal ||
      !saturacion_oxigeno ||
      !procalcitonina ||
      !lactato ||
      !proteina_creactiva ||
      !leucocitos ||
      !patologias_presentes
      /*!id_paciente*/
     ) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    
    console.log('Datos recibidos:', req.body);
    
    const nuevoSigno = await crearSignoVital(
      {
        frecuencia_cardiaca,
        presion_arterial,
        frecuencia_respiratoria,
        temperatura_corporal,
        saturacion_oxigeno,
        procalcitonina,
        lactato,
        proteina_creactiva,
        leucocitos,
        patologias_presentes,
        /*id_paciente,*/
      }
    )

    res.status(201).json({ signo: nuevoSigno })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al registrar signos vitales' })
  }
}