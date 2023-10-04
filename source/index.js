// Función para determinar la cantidad de días hasta Navidad
function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); 
    if (today > christmas) {
      christmas.setFullYear(today.getFullYear() + 1);
    }
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysRemaining = Math.ceil((christmas - today) / millisecondsPerDay);
    console.log(`Días hasta Navidad: ${daysRemaining}`);
  }
  daysUntilChristmas();
  
  
  // Función para calcular la edad a partir de la fecha de nacimiento
  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  
  // Función para validar un formulario
  function validateForm(formData) {
    // Implementa la lógica de validación aquí
  }
  
  // Exporta las funciones para que puedan ser utilizadas desde fuera del módulo
  module.exports = {
    daysUntilChristmas,
    calculateAge,
    validateForm,
  };
