# API REST para Gestión de Entradas de Diario
## Descripción
Esta API REST permite gestionar entradas de diario, proporcionando endpoints para obtener, agregar y manejar datos sobre entradas de diario. La API está construida utilizando Node.js con TypeScript y Express.

## Endpoints

### `GET /api/diario`

Obtiene todas las entradas de diario sin información sensible (sin el campo `comment`).

**Respuesta:**
- **Código de estado:** 200 OK
- **Contenido:** Una lista de objetos con las propiedades `id`, `date`, `weather`, y `visibility`.

- **Ejemplo de respuesta:**

```json
[
  {
    "id": 1,
    "date": "2017-01-01",
    "weather": "rainy",
    "visibility": "poor"
  },
  {
    "id": 2,
    "date": "2017-04-01",
    "weather": "sunny",
    "visibility": "good"
  }
]
