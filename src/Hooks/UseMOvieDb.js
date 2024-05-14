import { useEffect, useState } from "react";
import { fench } from "../services/fench";

export function UseMovieDb(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  async function LoadData() {
    if (!loading) setLoading(true);
    const result = await fench.get(endpoint)
    setLoading(false);
    setData(result.data);
  }
  useEffect(() => {
    LoadData();
  }, [endpoint]);
  return { data, loading };
}
