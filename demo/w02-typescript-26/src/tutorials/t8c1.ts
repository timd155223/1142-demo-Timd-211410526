/*******************************************/
// Fetch Data

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Tour[] = await response.json();
    return data;
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
  console.log('t8c1.ts', tour.name);
});
