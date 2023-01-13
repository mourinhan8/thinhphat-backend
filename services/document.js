import Document from '../models/document';

export default class cDocument {
  Create = async (data) => {
    try {
      const newDocument = new Document(data);
      const response = await newDocument.save();

      if (response) {
        return response;
      }
    } catch (error) {
      console.log('Create error', error);
    }
  };

  Find = async (query = {}, skip = null, limit = null, sort = null) => {
    try {
      const Query = Document.find(query);
      if (skip) Query.skip(skip);
      if (limit) Query.limit(limit);
      if (sort) Query.sort(sort);

      const results = await Query;

      return results || [];
    } catch (error) {
      console.log('Find error', error);
      return [];
    }
  };
}
