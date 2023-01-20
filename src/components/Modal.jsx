import { useState, useEffect } from 'react'
import Message from './Message';
import btnClose from '../img/cerrar.svg'


const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, expenseEdit, setExpenseEdit }) => {
    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setcantidad] = useState('');
    const [categoria, setcategoria] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            setNombre(expenseEdit.nombre)
            setcantidad(expenseEdit.cantidad)
            setcategoria(expenseEdit.categoria)
            setId(expenseEdit.id)
            setFecha(expenseEdit.fecha)
            
        }
    }, [])

    const closeModal = () => {
        setAnimateModal(false);
        setExpenseEdit({});
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los Campos son obligados.!');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return
        }

        saveExpense({ nombre, cantidad, categoria, id, fecha });
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={btnClose}
                    alt='Cerrar Modal'
                    onClick={closeModal}
                />
            </div>
            <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}>
                <legend>{expenseEdit.nombre ? 'Editar Gasto':'Nuevo Gasto'}</legend>
                {mensaje && <Message tipo='error'> {mensaje}</Message>}
                <div className='campo'>
                    <label htmlFor='nombre'>Descripcion</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Agrega una Descripcion del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Agrega el Monto del Gasto'
                        value={cantidad}
                        onChange={e => setcantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select id='categoria'
                        value={categoria}
                        onChange={e => setcategoria(e.target.value)}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos Varios</option>
                        <option value='salud'>Salud</option>
                        <option value='ocio'>Ocio</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                </div>
                <input type="submit"
                    value={expenseEdit.nombre ? 'Guardar Cambios':'Agregar Gasto'} />
            </form>
        </div>
    )
}

export default Modal