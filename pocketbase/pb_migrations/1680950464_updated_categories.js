migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9xek7b3lq14pmf")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9xek7b3lq14pmf")

  collection.listRule = null

  return dao.saveCollection(collection)
})
