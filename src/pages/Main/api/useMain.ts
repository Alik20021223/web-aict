import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../state/store";
import { setLoadingPage } from "../../../state/pagesSlice";
import api from "../../../api";

export const useMain = (apiLink: string) => {
  const loading = useSelector((state: RootState) => state.pages.loadingPage);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingPage(true));
        const response = await api.get(apiLink);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoadingPage(false));
      }
    };

    fetchData();

    return () => {
      setData([]);
      dispatch(setLoadingPage(true));
    };
  }, [dispatch]);

  return { data, loading };
};
