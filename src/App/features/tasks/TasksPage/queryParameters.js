import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);
  return parameters.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const parameters = new URLSearchParams(location.search);
  return (queryObject) => {
    const { key, value } = queryObject;
    if (!value) {
      parameters.delete(key);
    } else {
      parameters.set(key, value);
    }
    history.push(`${location.pathname}?${parameters.toString().trim()}`);
  };
};
