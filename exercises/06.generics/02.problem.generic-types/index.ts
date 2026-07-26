// Generic Types and Interfaces

// Create LoadingState discriminated union
type LoadingState<Data> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: string }

// Create success state
function createSuccess<Data>(data: Data): LoadingState<Data> {
  return {
    status: 'success',
    data,
  }
}

// Create error state
function createError<Data>(error: string): LoadingState<Data> {
  return {
    status: 'error',
    error,
  }
}

// Export functions
export { createSuccess, createError }