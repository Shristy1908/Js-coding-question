const users = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Aparna",
        "last": "Padmanabha"
      },
      "location": {
        "street": {
          "number": 3359,
          "name": "Camac St"
        },
        "city": "Madanapalle",
        "state": "Karnataka",
        "country": "India",
        "postcode": 75413,
        "coordinates": {
          "latitude": "11.6069",
          "longitude": "100.1315"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "aparna.padmanabha@example.com",
      "login": {
        "uuid": "1a7b5187-bb0d-4373-a582-0a3016121838",
        "username": "bluebird694",
        "password": "lauren",
        "salt": "Rb2lCnOt",
        "md5": "320b25735a72709eb790570d047fd566",
        "sha1": "d009eac66df045a1a8de0a1507ead8960291bf72",
        "sha256": "a0b7916fce4b1ffb27aa1178a4f99dbb99942bd7710692ac2f58350e54c818eb"
      },
      "dob": {
        "date": "1957-05-02T15:20:30.195Z",
        "age": 68
      },
      "registered": {
        "date": "2002-10-24T09:50:42.017Z",
        "age": 22
      },
      "phone": "8111525654",
      "cell": "7296327856",
      "id": {
        "name": "UIDAI",
        "value": "407054061724"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
      },
      "nat": "IN"
    }
  ],
  "info": {
    "seed": "d59f3f384087a45b",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

users.results.map((item)=>(
    document.writeln(`${item.location.country}`)
))
