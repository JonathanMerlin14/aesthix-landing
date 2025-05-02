
# AESTHIX Landing Page 🏋️‍♂️🖤

Landing page profesional para el lanzamiento de la marca de ropa deportiva **AESTHIX**, con funcionalidades completas para preventa y pagos en línea.

## 🚀 Funcionalidades

- Hero visual con mensaje de impacto
- Sección de preventa para colecciones **AURA** (mujer) y **ATHLYON** (hombre)
- Formulario de preventa con:
  - Nombre
  - Correo electrónico
  - Producto (AURA o ATHLYON)
  - Talla (XS a XL)
- Redirección automática a **Mercado Pago** con los datos del cliente
- Scroll suave entre secciones
- Animaciones al hacer scroll con **AOS**
- Responsive y optimizado para móviles
- Código estructurado con:
  - HTML limpio
  - CSS separado (`styles.css`)
  - JavaScript modular (`scripts.js`)

## ⚠️ Notas importantes

- 🧾 **Los enlaces reales de Mercado Pago aún no están activos.**
  Están simulados con URLs de prueba. Deben reemplazarse en `scripts.js`:

```js
const links = {
  aura: "https://mpago.la/link_para_aura", // TODO: reemplazar por enlace real
  athlyon: "https://mpago.la/link_para_athlyon" // TODO: reemplazar por enlace real
};
```

---

## 🌐 Deploy

El sitio fue preparado para ser desplegado fácilmente en **Netlify**.

### 📦 Estructura lista para deploy

```
/aesthix-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── images/
│   └── (todas las imágenes optimizadas)
```

### 💡 Puedes subirlo a Netlify de dos formas:

- Desde GitHub (`Import from GitHub`)
- Desde `.zip` vía [https://app.netlify.com/drop](https://app.netlify.com/drop)

---

## 📸 Mockup visual (con mejoras aplicadas)

![Preview Hero](preview.jpg)

---

## ✨ Autor

Jonathan Merlin — [@jonamerliin](https://github.com/JonathanMerlin14)

Proyecto real implementado para validar el primer lanzamiento de la marca AESTHIX, y como parte del portafolio profesional de desarrollo web.
