import api from "../../../api"

export const fethBlog = async (id: number) =>
  await api.get(`blog/per-page/${id}`)
