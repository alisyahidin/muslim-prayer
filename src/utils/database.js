import Dexie from 'dexie';

const db = new Dexie('muslim-prayer')
db.version(1).stores({
  settings: '&name'
})

export default db;