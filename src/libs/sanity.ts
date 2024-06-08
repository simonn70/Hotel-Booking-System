import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: "ug9vjh4m" ,
  dataset: "production",
  useCdn: process.env.NODE_ENV === 'production',
  token: "sk2dNsvhrG8oGwuT54Xvr99g3HzqqbtpeFEpJa56hsdl4X3t9IK9sTFPwintgd86CxtkN7PsFu4BYI7BmIjGGoOwjjofCUFUMfmbYBg99GKlugqo8S2GUcUeTDrCiqr9eWf0cXRAw4QYfMTlhEtwFCvrK5KK2MYKXVQP7UOysyOIYhrXg8HS",
  apiVersion: '2021-10-21',
});

export default sanityClient;

