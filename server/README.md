# Weather

A brief description of your project goes here.

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Aswinjithks/Weather-app

   ```

2. Navigate to the project directory:

   cd server

3. npm install

4. npm start





# Weather API Documentation

## Get Weather Information

The server will start at http://localhost:5000 by default.

Retrieve weather information for a specific city.

- **URL**

  `/weather`

- **Method:**

  `GET`

- **Query Parameters:**

  - `city` (required): The name of the city for which you want to get weather information.

- **Success Response:**

  - **Code:** 200 OK
  - **Content:**

    ```json
    {
      "data": {
        // Weather data for the specified city
      }
    }
    ```

- **Error Responses:**

  - **Code:** 400 Bad Request

    - **Content:**

      ```json
      {
        "error": "City parameter is required"
      }
      ```

  - **Code:** 404 Not Found

    - **Content:**

      ```json
      {
        "error": "City not found"
      }
      ```

  - **Code:** 500 Internal Server Error

    - **Content:**

      ```json
      {
        "error": "Internal Server Error"
      }
      ```

- **Example Request:**

  ```bash
  curl http://localhost:3000/weather?city=London
  ```

# Weather API Documentation

## Get Weather Information

Retrieve weather information for a specific city.

- **URL**

  `/weather`

- **Method:**

  `GET`

- **Query Parameters:**

  - `city` (required): The name of the city for which you want to get weather information.

- **Success Response:**

  - **Code:** 200 OK
  - **Content:**

    ```json
    {
      "data": {
        // Weather data for the specified city
      }
    }
    ```

- **Error Responses:**

  - **Code:** 400 Bad Request

    - **Content:**

      ```json
      {
        "error": "City parameter is required"
      }
      ```

  - **Code:** 404 Not Found

    - **Content:**

      ```json
      {
        "error": "City not found"
      }
      ```

  - **Code:** 500 Internal Server Error

    - **Content:**

      ```json
      {
        "error": "Internal Server Error"
      }
      ```

- **Example Request:**

  ```bash
  curl http://localhost:3000/weather?city=London
  {
  "data": {
    // Weather data for London
  }
  }
  ```
