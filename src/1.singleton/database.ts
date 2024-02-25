class DataBase {
  static instance: DataBase;

  // private constructor() {}

  static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
  }

  connect() {
    console.log('Connecting to database...');
  }

  disconnect() {
    console.log('Disconnecting to database...');
  }

  query(query: string) {
    console.log(`Querying DB => ${query}`);
  }
}

// 1- with getInstance() method

// 2- JS Modules with export for the instance not the class
export const db = new DataBase();
