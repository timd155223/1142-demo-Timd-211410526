/*******************************************/
// Fetch Data

import {z} from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

//type Tour = {
//  id: string;
//  name: string;
//  info: string;
//  image: string;
//  price: string;
//};

const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  description: z.string(),
});

type Tour = z.infer<typeof TourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = TourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid Data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);
    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: Tour) => {
  console.log('t8c2.ts', tour.name);
});
