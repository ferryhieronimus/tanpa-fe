export function SuccessToast({ children }: { children: string }) {
  return (
    <div className='toast toast-top toast-center z-50'>
      <div className='alert alert-success'>
        <span>{children}</span>
      </div>
    </div>
  );
}

export function ErrorToast({ children }: { children: string }) {
  return (
    <div className='toast toast-top toast-center z-50'>
      <div className='alert alert-error'>
        <span>{children}</span>
      </div>
    </div>
  );
}

export function LoadingToast({ children }: { children: string }) {
  return (
    <div className='toast toast-top toast-center z-50'>
      <div className='alert alert-info'>
        <span className='loading loading-spinner' />
        <span>{children}</span>
      </div>
    </div>
  );
}
