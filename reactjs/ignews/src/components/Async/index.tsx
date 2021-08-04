import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello world</div>
      <main>{isButtonVisible && <button>Maria</button>}</main>
      <footer>{!isButtonInvisible && <button>Juliana</button>}</footer>
    </div>
  );
}
