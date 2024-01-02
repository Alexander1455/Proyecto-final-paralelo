import { toast } from 'react-toastify'

const useToast = () => {
  /**
   * @param {'success' | 'error' | 'warning' | 'error' } type
   * @param {String} message
   */
  const createToast = (type, message) => {
    toast[type](message)
  }

  return { createToast }
}
export default useToast
