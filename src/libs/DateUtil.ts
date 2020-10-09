import moment from 'moment';
import _ from 'lodash';

/**
 * date 타입만 갖고 있는 object => string 타입으로 변환 후 object로 반환
 */
export const mapDateString = (dateObj: { [index: string]: Date | null }) => {
  const stringObj = _.mapValues(dateObj, (o) =>
    o ? moment(o).format('YYYY-MM-DD') : ''
  );

  return stringObj;
};
