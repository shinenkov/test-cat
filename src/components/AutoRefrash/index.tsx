import { useCallback, useEffect, useState } from 'react';
import { useGetCatAsyncQuery } from '../../store/cats';
import Checkbox from '../../shared/Checkbox';

type AutoRefrashProps = {
  disabled: boolean;
};

const AutoRefrash = (props: AutoRefrashProps) => {
  const [autoRefetching, setAutoRefetching] = useState(false);
  const { refetch } = useGetCatAsyncQuery({ limit: 1 });
  const { disabled } = props;

  useEffect(() => {
    if (autoRefetching) {
      const interval = setInterval(() => {
        refetch();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefetching, refetch]);

  const toggleAutoRefetching = useCallback(() => {
    setAutoRefetching((prev) => !prev);
  }, []);

  return (
    <Checkbox
      id="refrash"
      label="Auto-refrash every 5 second"
      disabled={disabled}
      checked={autoRefetching}
      onChange={toggleAutoRefetching}
    />
  );
};

export default AutoRefrash;
