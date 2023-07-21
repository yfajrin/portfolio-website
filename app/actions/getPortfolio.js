export const getPortfolio = async () => {
        try {
          const response = await fetch('/projects.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching projects data:', error);
        }
}