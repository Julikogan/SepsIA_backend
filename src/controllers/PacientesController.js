import axios from 'axios'
import { crearPaciente } from '../services/PacienteServices.js'
import { actualizarPacienteService } from '../services/PacienteServices.js';

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

export const actualizarPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Falta el ID del paciente' });
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return res.status(400).json({ error: 'El ID del paciente no es válido' });
    }

    const pacienteActualizado = await actualizarPacienteService(idNumber);

    return res.status(200).json({
      message: 'Paciente actualizado con éxito',
      pacienteActualizado
    });
  } catch (err) {
    console.error('Error al actualizar paciente:', err);
    return res.status(500).json({ error: 'Error al actualizar datos del paciente' });
  }
};