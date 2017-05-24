# Operators
## Combination

- **Combine all** Use it to flatten inner Observables with a combineLatest strategy
- **Combine latest** Emits the last value of each observable (Additionaly you can provide a projection function that takes the value from each observable as parameter as third argument)
- **Concat** Concats multiple observables - emits one observable only after the other completes
- **Concat all** Concats multiple inner observables - emits one observable only after the other completes
- **Fork join** Emits the last value of each observable after all completed
- **Merge** Merges multiple observables together and emits a value as soon as it arrives
- **Merge all** Flattens InnerObservables with the merge strategie

## Transformation
- **mapTo** Maps an observable to a static value

