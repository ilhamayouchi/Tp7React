function DataLoader({ render }) {
  const data = ['Ilhame', 'amal', 'youssef'];

  return <div>{render(data)}</div>;
}

export default DataLoader;
