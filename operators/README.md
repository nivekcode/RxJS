# Operators
## Combination

- **Combine all** Use it to flatten inner Observables with a combineLatest strategy
- **Combine latest** Emits the last value of each observable (Additionaly you can provide a projection function that takes the value from each observable as parameter as third argument)
- **Concat** Concats multiple observables - emits one observable only after the other completes
- **Concat all** Concats multiple inner observables - emits one observable only after the other completes
- **Fork join** Emits the last value of each observable after all completed
- **Merge** Merges multiple observables together and emits a value as soon as it arrives
- **Merge all** Flattens InnerObservables with the merge strategie
- **Race** Uses the observable that emits the first
- **Start with** Emits the given value first
- **With latest from** Emits the latest value from another observable when the source emits
- **Zip** Emits first value after all observables emmited a first value. The second value is emmited as soon as all observables emmit a second value

## Conditional

- **defaultIfEmpty** Emits a default value if the observable completes and did not emmmit a value
- **every** Emmits true of false if an observable completes or a item does not pass the condition

## Creation

- **Create** Creates on observable that executes the subscribe function you pass in
- **empty** Creates an observable that does not emit a value and completes
- **from** Creates an observable from an iterable
- **fromEvent** Creates an observable from en Event
- **fromPromise** Creates an observable from a promise
- **interval** Creates an observable that emits a value in an interval. For example emits a value every second.
- **of** Creates an observable from given values
- **range** Creates an observable that emits all values in a given range
- **throw** Creates an observable that throws an error
- **timer** After a given duration it emits numbers in a interval sequence

## Error Handling
- **catch** Handles errors in an Observable sequence. Returns a new observable
- **retry** Retry an observable sequence a specific number of times if an error occures
- **retryWhen** Retry an observable sequence on error based custom criteria

## Multicast
- **publish** Shares a observable with its subscribers as soon as we call connect
- **multicast** Shares an observable by providing the Subject. You can also provide a BehaviourSubject or a AsyncSubject.
- **share** Shares an observable with multiple subscribers

## Filter
- **debounce** Discard emitted values that take less than the specified time between output - callback needs to return an Observable
- **debounceTime** Discard emitted values that take less than the specified time
- **distinctUntilChanged** Emits only if the currenvt value is different from the previous value
- **filter** Emits all values that pass a tha criteria defined in the callback
- **first** Emits the first value from an observable. Can have a projection function. For example to only emmit the first odd value. Furthermore there is alos a possibility to provide a default value
- **ignoreElements** Ignores all elements and only emits errors and completions

## Transformation
- **mapTo** Maps an observable to a static value

