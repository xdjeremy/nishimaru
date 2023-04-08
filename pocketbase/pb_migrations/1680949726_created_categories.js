migrate((db) => {
  const collection = new Collection({
    "id": "o9xek7b3lq14pmf",
    "created": "2023-04-08 10:28:46.218Z",
    "updated": "2023-04-08 10:28:46.218Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jgql7cfj",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lwtksfay",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "h5nvivpl",
        "name": "featured",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "i9r4ixbb",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o9xek7b3lq14pmf");

  return dao.deleteCollection(collection);
})
