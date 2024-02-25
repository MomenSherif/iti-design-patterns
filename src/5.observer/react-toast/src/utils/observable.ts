export type Observer<TData> = (data: TData) => void;

export class Observable<TData> {
  private observers: Observer<TData>[] = [];

  subscribe(observerFn: Observer<TData>) {
    this.observers.push(observerFn);
    return () => {
      this.observers = this.observers.filter(o => o !== observerFn);
    };
  }

  notify(data: TData) {
    this.observers.forEach(observer => observer(data));
  }
}
