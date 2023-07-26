export const getSkills = async () => {
    try {
      const response = await fetch('/skills.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
}