import Employee from '../models/employee';

export default class cEmployee {
  Create = async (data) => {
    try {
      const newEmployee = new Employee(data);
      const response = await newEmployee.save();

      if (response) {
        return response;
      }
    } catch (error) {
      console.log('Create error', error);
    }
  };

  Find = async (query = {}, skip = null, limit = null, sort = null) => {
    try {
      const Query = Employee.find(query);
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
