async function openDoor(event, context) {
    
    // Body
    // {
    //     "id":3285,
    //     "name":"Yuri",
    //     "cod": "SNGAV00MM0001",
    //     "gender":1,
    //     "birthDate":"1995-03-29 00:00:00",
    //     "lat": 52.2296756,
    //     "lon": 21.0122287,
    //     "access": 1
    // }

    const user = JSON.parse(event.body);

    
    return {
      statusCode: 200,
      body: JSON.stringify({ user }),
    };
  }

export const handler = openDoor;