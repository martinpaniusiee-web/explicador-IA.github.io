# 🤖 Explicador IA - Seguro y Protegido

Una aplicación web que explica textos de forma sencilla usando Google Generative AI.

## 🔐 Seguridad

✅ **API Key protegida en el servidor** - Nunca se expone al cliente  
✅ **Variables de entorno** - Credenciales no comprometidas  
✅ **Backend Node.js** - Procesa todas las solicitudes de forma segura  
✅ **Sin claves en git** - `.gitignore` protege archivos sensibles

## 📋 Requisitos

- Node.js v14+  
- npm

## 🚀 Instalación Local

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/martinpaniusiee-web/explicador-IA.github.io.git  
   cd explicador-IA.github.io
   ```

2. **Instala dependencias**  
   ```bash
   npm install
   ```

3. **Ejecuta el servidor**  
   ```bash
   npm start
   ```  
   La app estará disponible en `http://localhost:3000`

## 🔄 Flujo de Seguridad

```
Cliente (Frontend)
    ↓
POST /api/explicar (sin credenciales)
    ↓
Servidor (Backend)
    ↓
Lee API_KEY desde .env
    ↓
Llama a Google AI API
    ↓
Retorna respuesta al cliente
```

## 📁 Estructura del Proyecto

```
.
├── public/
│   ├── index.html      # Interfaz HTML
│   ├── style.css       # Estilos
│   └── script.js       # JavaScript del cliente
├── server.js           # Backend Express (API key protegida)
├── .env                # Variables secretas (no subir a git)
├── .env.example        # Plantilla de configuración
├── .gitignore          # Protege archivos sensibles
└── package.json        # Dependencias
```

## ⚠️ IMPORTANTE

**La API key está protegida en `.env`** (nunca se sube a git)

Si accidentalmente expones una API key:
1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Elimina la clave comprometida
3. Crea una nueva

## 🌐 Despliegue

### En Heroku
```bash
heroku create tu-app-name
heroku config:set GOOGLE_API_KEY=tu_api_key
git push heroku main
```

### En Render, Railway, o Vercel
Configura la variable de entorno `GOOGLE_API_KEY` en el panel de control.

## 👨‍💻 Autor

martinpaniusiee-web