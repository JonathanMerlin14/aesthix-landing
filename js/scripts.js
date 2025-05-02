function redirigirPago(e) {
    e.preventDefault();
  
    const form = document.getElementById('preorderForm');
    const producto = form.producto.value;
    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const talla = form.talla.value;
  
    const links = {
      aura: "https://mpago.la/link_para_aura",
      athlyon: "https://mpago.la/link_para_athlyon"
    };
  
    if (!links[producto]) {
      alert("Enlace de pago no disponible.");
      return false;
    }
  
    // Mostrar confirmación
    const mensaje = `
    Estás a punto de apartar el set "${producto.toUpperCase()}" con los siguientes datos:\n\n
    👤 Nombre: ${nombre}
    📧 Correo: ${correo}
    📏 Talla: ${talla}\n\n
    ¿Deseas continuar con el pago?
    `;
  
    const confirmar = confirm(mensaje);
  
    if (!confirmar) return false;
  
    // Redirigir a enlace con parámetros
    const redirectURL = `${links[producto]}?nombre=${encodeURIComponent(nombre)}&correo=${encodeURIComponent(correo)}&talla=${encodeURIComponent(talla)}`;
    window.open(redirectURL, '_blank');
    return false;
  }