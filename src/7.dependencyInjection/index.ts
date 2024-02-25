import 'reflect-metadata';

type Constructor<T> = { new (...args: any[]): T };

function Injectable() {
  return function <T>(Target: Constructor<T>) {
    // console.log(Reflect.getMetadata('design:paramtypes', Target));
  };
}

class Service1 {
  doService1Something() {
    console.log('service 1');
  }
}

class Service2 {
  doService2Something() {
    console.log('service 2');
  }
}

@Injectable()
class BookStore {
  constructor(public service1: Service1, public service2: Service2) {}
}

// const bookStore = new BookStore(new Service1(), new Service2());
// console.log(bookStore);

class Injector {
  static cache = new Map();

  static resolve<T>(Target: Constructor<T>) {
    if (Injector.cache.has(Target)) {
      return Injector.cache.get(Target);
    }

    const tokens = Reflect.getMetadata('design:paramtypes', Target) || [];
    const injections = tokens.map((token: Constructor<any>) =>
      Injector.resolve(token),
    );

    const instance = new Target(...injections);
    Injector.cache.set(Target, instance);
    return instance;
  }
}

// const bookStore = Injector.resolve(BookStore);

// cache
// const bookStore1 = Injector.resolve(BookStore);
// const bookStore2 = Injector.resolve(BookStore);

// console.log(bookStore1.service1 === bookStore2.service1);
