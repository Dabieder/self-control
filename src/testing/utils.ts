import { NgModule, Injectable } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  Store,
  StateObservable,
  ActionsSubject,
  ReducerManager,
  StoreModule
} from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "../app/material.module";

@Injectable()
export class MockStore<T> extends Store<T> {
  private stateSubject = new BehaviorSubject<T>({} as T);

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager
  ) {
    super(state$, actionsObserver, reducerManager);
    this.source = this.stateSubject.asObservable();
  }

  setState(nextState: T) {
    this.stateSubject.next(nextState);
  }
}

export function provideMockStore() {
  return {
    provide: Store,
    useClass: MockStore
  };
}

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    MaterialModule,
    StoreModule.forRoot({})
  ],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
  ],
  providers: [provideMockStore()]
})
export class TestingModule {
  constructor() {}
}
