import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Andrelino' },
    { id: 2, name: 'Juliana' },
    { id: 3, name: 'João' },
    { id: 4, name: 'Andre' },
    { id: 5, name: 'Ze' },
  ]

  return response.json(users);
};
