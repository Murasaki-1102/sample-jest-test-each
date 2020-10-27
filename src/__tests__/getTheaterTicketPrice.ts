import {getTheaterTicketPrice} from '../getTheaterTicketPrice';

describe('getTheaterTicketPrice', () => {
  type TestArgsGetTheaterTicketPrice = {
    watchDateTime: string;
    birthday: string;
    price: number;
  };

  test.each`
    watchDateTime         | birthday              | price
    ${'2020-10-10T10:00'} | ${'1980-05-05T00:00'} | ${1800}
    ${'2020-10-10T10:00'} | ${'2010-05-05T00:00'} | ${1200}
    ${'2020-10-01T10:00'} | ${'1980-05-05T00:00'} | ${1000}
    ${'2020-10-10T23:00'} | ${'1980-05-05T00:00'} | ${1100}
  `(
    '上映日 $watchDateTime の映画を、誕生日が $birthday の人が見た場合、値段は $price 円である',
    ({watchDateTime, birthday, price}: TestArgsGetTheaterTicketPrice) => {
      expect(
        getTheaterTicketPrice(new Date(watchDateTime), new Date(birthday))
      ).toBe(price);
    }
  );

  // 練習1: 条件が重複している場合のチェック
  test.todo(
    '条件が重複している場合のチェックを追加。例えばファーストデイかつレイトショーで1,000円など'
  );

  // 練習2: 境界値のチェック
  test.todo('「小人」の境界値をチェック');
  test.todo('「ファーストデイ」の境界値をチェック');
  test.todo('「レイトショー」の境界値をチェック');

  // 練習3: 割引を追加してチェック
  test.todo('「学生割引」をチェック');
  test.todo('「誕生日割引」をチェック');
  test.todo('「株主優待割引」をチェック');
  test.todo('「団体割引」をチェック');
});
