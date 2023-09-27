
export async function initMocks() {
  if(typeof window === 'undefined') {
    const { serverWorker } = await import('./server');
    
    serverWorker.listen({
      onUnhandledRequest: 'bypass'
    });
  } else {
    const { worker } = await import('./browser');
    worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
}