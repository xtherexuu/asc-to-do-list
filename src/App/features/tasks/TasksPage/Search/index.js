import Input from "../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../queryParameters";
export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
