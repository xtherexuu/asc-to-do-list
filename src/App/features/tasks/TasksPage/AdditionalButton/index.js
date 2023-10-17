import { Button } from "./styled";

export default ({ content, onClickAction, isDisabled }) => {
  return (
    <Button onClick={onClickAction} disabled={isDisabled}>
      {content}
    </Button>
  );
};
