// There are five types of decorators we can use:

// 1. Class Decorators
// 2. Property Decorators
// 3. Method Decorators
// 4. Accessor Decorators
// 5. Parameter Decorators

// @classDecorator
// class Customer {
//   @propertyDecorator
//   name: string;
//   password: string;

//   constructor(@parameterDecorator name: string, @parameterDecorator password: string) {
//     this.name = name;
//     this.password = password;
//   }

//   test(@parameterDecorator param: string) {
//     console.log('test decorator', param);
//   }

//   @methodDecorator
//   getIsSubscribed(): boolean {
//     return Math.random() < 0.5;
//   }

//   @accessorDecorator
//   get isSubscribed(): boolean {
//     return Math.random() < 0.5;
//   }
// }

// ---------------------------------------------
type Constructor = { new (...args: any[]): {} };

// @Params:
// target: The constructor of the class.
// @Returns:
// If the class decorator returns a value, it will replace the class declaration.
// Thus, it’s suitable for extending an existing class with some properties or methods.

function classDecorator<T extends Constructor>(Target: T) {
  return class extends Target {
    random = Math.random();
  };
}

function Component(options: { selector: string; template: string }) {
  return function <T extends Constructor>(Target: T) {
    return class extends Target {
      selector = options.selector;
      template = options.template;
    };
  };
}

// ---------------------------------------------
function propertyDecorator(target: Object, propertyKey: string) {
  console.log(target, propertyKey);
}

function Min(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const setter = function (newValue: string) {
      if (newValue.length < limit) {
        throw new Error(
          `Password is too short, minimum is ${limit} characters`,
        );
      } else {
        value = newValue;
      }
    };

    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

// ---------------------------------------------
function Confirm(message: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (window.confirm(message)) {
        return originalMethod.apply(this, args);
      }

      return null;
    };
  };
}
// @classDecorator
// @Component({
//   selector: 'app-customer',
//   template: '<h1>hello</h1>',
// })
class Customer {
  name: string;

  // @propertyDecorator
  // @Min(6)
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  @Confirm('Are you sure?')
  sendEmail() {
    console.log('Sending email...');
  }

  get isSubscribed(): boolean {
    return Math.random() < 0.5;
  }
}

export { Customer };

// import { Customer } from './6.decorator';

// const customer = new Customer('momen', '123456');
// // customer.password = '123';
// // console.log(customer.password);

// document.getElementById('send-email')?.addEventListener('click', () => {
//   customer.sendEmail();
// });
