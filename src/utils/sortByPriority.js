const compare = (a, b) => {
  const priorityValues = {
    high: 3,
    medium: 2,
    low: 1
  };
  return priorityValues[b.priority] - priorityValues[a.priority];
};

export default todos => [...todos].sort(compare);
