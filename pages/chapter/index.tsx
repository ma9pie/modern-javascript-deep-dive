import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/chapter/1');
  }, []);

  return null;
};

export default Index;
