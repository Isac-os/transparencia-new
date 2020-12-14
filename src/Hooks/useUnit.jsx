import { useState, useEffect } from "react";
import api from '../Services/api';

const useUnit = () => {
  const [unidade, setUnidade] = useState([])
  const [sede, setSede] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = await api.get('/units');
      setUnidade(url.data);
      ;
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = await api.get('20');
      setSede(url.data);
    };
    fetchData();
  }, []);


  return [{ unidade, sede }]
};

export default useUnit;

