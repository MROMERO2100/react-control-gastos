export const generateID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return random + fecha;
}

export const formatDate = date => {
    const newDate = new Date(date);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return newDate.toLocaleDateString('es-ES', opciones)
}

export const formatearMonto = (monto) => {
    const newMonto = Number(monto);
    const opciones = {
        style: 'currency',
        currency: 'USD'
    }
    return newMonto.toLocaleString('en-US', opciones)
}