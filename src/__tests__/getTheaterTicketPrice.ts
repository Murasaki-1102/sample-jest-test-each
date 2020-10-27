import {getTheaterTicketPrice} from '../getTheaterTicketPrice';

describe('getTheaterTicketPrice', () => {
  type TestArgsGetTheaterTicketPrice = {
    watchDateTime: string;
    birthday: string;
    price: number;
  };

  test.each`
    watchDateTime                  | birthday        | price
    ${'2020-10-10T10:00:00+09:00'} | ${'1980-05-05'} | ${1800}
    ${'2020-10-10T10:00:00+09:00'} | ${'2010-05-05'} | ${1200}
    ${'2020-10-01T10:00:00+09:00'} | ${'1980-05-05'} | ${1000}
    ${'2020-10-10T23:00:00+09:00'} | ${'1980-05-05'} | ${1100}
  `(
    '上映日 $watchDateTime の映画を、誕生日が $birthday の人が見た場合、値段は $price 円である',
    ({watchDateTime, birthday, price}: TestArgsGetTheaterTicketPrice) => {
      expect(
        getTheaterTicketPrice(new Date(watchDateTime), new Date(birthday))
      ).toBe(price);
    }
  );

  test.todo('「小人」の境界値をチェック');
  test.todo('「映画の日」の境界値をチェック');
  test.todo('「レイトショー」の境界値をチェック');
});
