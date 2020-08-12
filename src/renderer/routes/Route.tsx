import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Default from 'renderer/_layouts/Default';

interface IRouterWrapperProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
}

const RouterWrapper: React.FC<IRouterWrapperProps> = ({
  component: Component,
  ...rest
}: IRouterWrapperProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Default>
          <Component {...props} />
        </Default>
      )}
    />
  );
};

export default RouterWrapper;
