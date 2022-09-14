import { useEffect } from "react";
import { useRouter } from 'next/router'

const usePathname = () => {
  const location = useRouter();

  useEffect(() => {
    /* console.log(location); */
  }, [location])
  return location.pathname;
}
export default usePathname;