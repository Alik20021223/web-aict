import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../../state/store"
import { setLoadingPage } from "../../../state/pagesSlice"
import { fethBlog } from "./api"

export const useMain = (id: number) => {
  const loading = useSelector((state: RootState) => state.pages.loadingPage)
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoadingPage(true))
    fethBlog(id)
      .then(({ data }) => setData(data))
      .finally(() => (dispatch(setLoadingPage(false))))

    return () => {
      setData([])
      dispatch(setLoadingPage(true))
    }
  }, [dispatch])

  return { data, loading }
}
