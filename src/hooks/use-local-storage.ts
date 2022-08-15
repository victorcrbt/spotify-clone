type SetItemParams = {
  key: string;
  value: any;
};

export function useLocalStorage() {
  const canParse = (data: any) => {
    try {
      JSON.parse(data);

      return true;
    } catch (error) {
      return false;
    }
  };

  const getItem = (key: string) => {
    const data = localStorage.getItem(key);

    if (data && canParse(data)) {
      return JSON.parse(data);
    }

    return data;
  };

  const setItem = ({ key, value }: SetItemParams) =>
    localStorage.setItem(key, JSON.stringify(value));

  const removeItem = (key: string) => localStorage.removeItem(key);

  const clearStorage = () => localStorage.clear();

  return { getItem, setItem, removeItem, clearStorage };
}
