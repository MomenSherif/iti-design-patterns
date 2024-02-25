type Observer<TData> = (data: TData) => void;

// class Observable<TData> {
//   private observers: Observer<TData>[] = [];

//   subscribe(observerFn: Observer<TData>) {
//     this.observers.push(observerFn);
//   }

//   unsubscribe(observerFn: Observer<TData>) {
//     this.observers = this.observers.filter(obs => obs !== observerFn);
//   }

//   notify(data: TData) {
//     this.observers.forEach(observer => observer(data));
//   }
// }

// type Events = 'iphone-available' | 'black-friday-sales';
// const observable = new Observable<Events>();

// observable.subscribe(data => console.log(`Observer 1 => ${data}`));

// const handleSubscription = (data: Events) => {
//   console.log(`Observer 2 => ${data}`);
// };

// // observable.subscribe(handleSubscription);
// observable.subscribe(data => console.log(`Observer 3 => ${data}`));

// observable.notify('iphone-available');

// // observable.unsubscribe(handleSubscription);

// setTimeout(() => {
//   observable.notify('black-friday-sales');
// }, 3000);

class Observable<TData> {
  private observers: Observer<TData>[] = [];

  subscribe(observerFn: Observer<TData>) {
    this.observers.push(observerFn);
    return () => {
      this.observers = this.observers.filter(obs => obs !== observerFn);
    };
  }

  notify(data: TData) {
    this.observers.forEach(observer => observer(data));
  }
}

type Events = 'iphone-available' | 'black-friday-sales';
const observable = new Observable<Events>();

observable.subscribe(data => console.log(`Observer 1 => ${data}`));
const unsubscribe2 = observable.subscribe(data =>
  console.log(`Observer 2 => ${data}`),
);

observable.subscribe(data => console.log(`Observer 3 => ${data}`));

observable.notify('iphone-available');

unsubscribe2();

setTimeout(() => {
  observable.notify('black-friday-sales');
}, 3000);
