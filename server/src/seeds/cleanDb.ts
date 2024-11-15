import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    
    // Check if the model exists before accessing `db` and `listCollections`
    if (model && model.db && model.db.db) {
      const modelExists = await model.db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      throw new Error(`Model ${modelName} does not exist or is not configured properly.`);
    }
  } catch (err) {
    throw err;
  }
};
