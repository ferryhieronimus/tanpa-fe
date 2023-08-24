"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className='grid h-screen px-4 bg-white place-content-center'>
      <div className='text-center'>
        <h1 className='font-black text-gray-200 text-7xl'>Oops!</h1>

        <p className='mt-4 text-gray-500'>
          {error.message || "Something bad happened :("}
        </p>

        <button
          onClick={() => reset()}
          type='button'
          className='btn btn-primary mt-8'
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
