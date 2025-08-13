import axios from 'axios'
import { crearPaciente } from '../services/PacienteServices.js'

export const registrarPaciente = async (req, res) => {
  try {
    const { 
       nombre,
        sexo,
        edad,
        dni, 
        habitacion
     } = req.body
// Validar datos obligatorios
    if (
      !nombre ||
      !sexo ||
      !edad ||
      !dni ||
      !habitacion
     ) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    
    console.log('Datos recibidos:', req.body);

    const nuevoPaciente = await crearPaciente(
      {
        nombre,
        sexo,
        edad,
        dni, 
        habitacion 
      }
    )

    res.status(201).json({ message: 'Paciente creado exitosamente', nuevoPaciente })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al registrar paciente' })
  }
}