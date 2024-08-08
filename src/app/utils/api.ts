import api from '@/app/utils/axiosInstance'

export async function getDashboardInfoById(id: number) {
  try {
    const response = await api.get(`/dashboards/${id}`)
    return response.data
  } catch (error) {
    return error.message
  }
}

export async function getDashboardInvitationById(id: number) {
  try {
    const response = await api.get(`/dashboards/${id}/invitations`)
    return response.data
  } catch (error) {
    return error.message
  }
}