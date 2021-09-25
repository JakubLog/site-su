import React, { useEffect, useState } from 'react';
import { Wrapper, PolandMap, Image, Informations } from './CovidBlock.styles';
import axios from 'axios';
import { useError } from 'hooks/useError';

const getDate = (step?: number) => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${
    date.getDate() + (step || 0) < 10 ? '0' + (date.getDate() + (step || 0)) : date.getDate() + (step || 0)
  }`;
};

const getSummaryFromObject = (obj: { [key: string]: number }) => {
  const total = obj[getDate()];
  const yesterday = obj[getDate(-1)];
  const today = total - yesterday;
  return { total, yesterday, today };
};

const CovidBlock: React.FC = () => {
  const [covid, setCovid] = useState({ today: 0, total: 0, yesterday: 0, country: 'Poland' });
  const [isLoading, setLoadingState] = useState(true);
  const { dispatchError } = useError();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            All: { dates, country }
          }
        } = await axios.get('https://covid-api.mmediagroup.fr/v1/history?country=Poland&status=confirmed');
        const results = getSummaryFromObject(dates);
        setCovid({ ...results, country });
      } catch (e) {
        dispatchError('Something went wrong, please contact with support!');
      }
      setLoadingState(false);
    })();
  }, []);

  return (
    <Wrapper>
      <PolandMap>
        <Image
          src="https://www.mio.com/pl_pl/shop/media/catalog/product/cache/55/image/500x500/9df78eab33525d08d6e5fb8d27136e95/p/o/poland_1_1.png"
          alt="Poland's map"
        />
      </PolandMap>
      <Informations>
        <dt>Kraj</dt>
        <dd>{isLoading ? 'Loading...' : covid.country}</dd>
        <dt>Dzisiaj</dt>
        <dd>{isLoading ? 'Loading...' : `${covid.today} zakażeń*`}</dd>
        <dt>Od początku</dt>
        <dd>{isLoading ? 'Loading...' : `${covid.total} chorych`}</dd>
      </Informations>
    </Wrapper>
  );
};

export default CovidBlock;
