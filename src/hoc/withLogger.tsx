import { useEffect } from 'react';
import type { ComponentType } from 'react';

const withLogger = <P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) => {
  const WithLogger = (props: P) => {
    useEffect(() => {
      console.log(`${componentName} mounted`);

      return () => {
        console.log(`${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `withLogger(${componentName})`;

  return WithLogger;
};

export default withLogger;