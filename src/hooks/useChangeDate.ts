import { ChangeEvent, useCallback, useReducer } from 'react';
import moment from 'moment';

function reducer(
  state: any,
  action: { type: string; name?: string; value?: string }
) {
  switch (action.type) {
    case 'CHANGE':
      if (action.name) {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
    case 'RESET':
      return Object.keys(state).reduce(
        (acc: { [index: string]: any }, current) => {
          acc[current] = '';
          return acc;
        },
        {}
      );
    default:
      return state;
  }
}

function useChangeDate(initForm: { [index: string]: string }) {
  const [form, dispatch] = useReducer(reducer, initForm);

  /** date Change 함수 */
  const onChange = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      const value = moment(date).format('YYYY-MM-DD');
      dispatch({ type: 'CHANGE', name, value });
    },
    []
  );

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return [form, onChange, reset];
}

export default useChangeDate;
