import axios from 'axios'
import {crearPaciente, actualizarPacienteService, obtenerPacientesService} from '../services/PacienteServices.js'

export const registrarPaciente = async (req, res) => {
  try {
    const { 
       nombre,
        sexo,
        edad,
        dni, 
        habitacion
     } = req.body

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
    const idNumber = Number(id);

    if (!id) {
      return res.status(400).json({ error: 'Falta el ID del paciente' });
    }

    if (isNaN(idNumber)) {
      return res.status(400).json({ error: 'El ID del paciente no es válido' });
    }

    const { nombre, sexo, edad, dni, habitacion } = req.body;

    const data = {};
    if (nombre !== undefined) data.nombre = nombre;
    if (sexo !== undefined) data.sexo = sexo;
    if (edad !== undefined) data.edad = edad;
    if (dni !== undefined) data.dni = dni;
    if (habitacion !== undefined) data.habitacion = habitacion;

    data.ingreso_paciente = new Date();

    console.log("ID recibido en el controller:", idNumber);
    console.log("DATA ENVIADO AL SERVICE:", data);

    const pacienteActualizado = await actualizarPacienteService(idNumber, data);

    return res.status(200).json({
      message: 'Paciente actualizado con éxito',
      pacienteActualizado
    });
  } catch (err) {
    console.error('Error al actualizar paciente:', err);
    return res.status(500).json({ error: err.message || 'Error al actualizar paciente' });
  }
};

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await obtenerPacientesService();
    
    if (pacientes.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(pacientes);
  } catch (err) {
    console.error('Error al obtener pacientes:', err);
    return res.status(500).json({ error: 'Error al obtener el listado de pacientes' });
  }
};