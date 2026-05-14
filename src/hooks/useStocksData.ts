import { useEffect, useState } from 'react';

import { StockItem } from '../types';

export const useStocksData = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/ff501785bdec215eef0df37040a4ff35/raw/');
      const data = (await response.json()) as { items: StockItem[] };
      setStocks(data.items);

      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, loading };
};
