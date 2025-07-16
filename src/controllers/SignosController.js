import axios from 'axios'
import { crearSignoVital } from '../services/SignosServices.js'

export const registrarSignosVitales = async (req, res) => {
  try {
    const { presion } = req.body
// Validar datos obligatorios
    if ( !presion ) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    
    console.log('Datos recibidos:', req.body);
    
    const nuevoSigno = await crearSignoVital(presion)

    res.status(201).json({ signo: nuevoSigno })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al registrar signos vitales' })
  }
}