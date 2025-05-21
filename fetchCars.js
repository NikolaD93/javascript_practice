export const getAllCars = async () => {
    const res = await fetch('https://cars-api-rjtn.onrender.com/api/cars');
    const data = await res.json()
    return data
}

export const getCar = async (id) => {
    const res = await fetch(`https://cars-api-rjtn.onrender.com/api/cars/${id}`);
    const data = await res.json()
    return data
}

