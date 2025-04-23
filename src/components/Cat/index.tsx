import { useState, useCallback } from 'react';
import { useAppSelector } from '../../api/hooks';
import { selectCatList } from '../../store/cats/';
import { useGetCatAsyncQuery } from '../../store/cats';
import styles from './styles.module.css';
import Loading from '../Loading';
import Button from '../../shared/Button';
import Image from '../../shared/Image';
import Checkbox from '../../shared/Checkbox';
import AutoRefrash from '../AutoRefrash';

const Cat = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const cats = useAppSelector(selectCatList);
  const { isFetching, refetch } = useGetCatAsyncQuery({ limit: 1 });

  const toggleIsEnabled = useCallback(() => {
    setIsEnabled((prev) => !prev);
  }, []);

  const getCat = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cat</h2>
      <Checkbox
        id="enabled"
        label="Enabled"
        checked={isEnabled}
        onChange={toggleIsEnabled}
      />
      <AutoRefrash disabled={!isEnabled} />
      <Button
        disabled={isFetching || !isEnabled}
        label="Get cat"
        onClick={getCat}
      />
      <div className={styles.wrapper}>
        {isFetching ? <Loading /> : <Image url={cats[0]?.url} />}
      </div>
    </div>
  );
};

export default Cat;
