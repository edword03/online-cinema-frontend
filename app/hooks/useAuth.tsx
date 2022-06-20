import { useSelector } from './useTypedHooks';

export const useAuth = () => useSelector((state) => state.user);
