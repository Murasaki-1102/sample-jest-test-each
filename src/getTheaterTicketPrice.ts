/**
 * 仕様
 * - 大人: 1,800円、小人(12歳以下): 1,200円
 * - ファーストデイ（3/1, 4/1など): 1,000円
 * - レイトショー(22:00以降の上映): 1,100円
 *
 * 補則：
 * - 複数の割引が当てはまった場合は、最も安くなるものを、1つのみ採用する
 */

const getDate = require('date-fns/getDate');
const getHours = require('date-fns/getHours');
const differenceInYears = require('date-fns/differenceInYears');

export const getTheaterTicketPrice = (watchDateTime: Date, birthday: Date) => {
  if (getDate(watchDateTime) === 1) return 1000;
  if (getHours(watchDateTime) >= 22) return 1100;
  if (differenceInYears(watchDateTime, birthday) <= 12) return 1200;

  return 1800;
};

/**
 * #1 : 条件が重複している場合のチェック。ファーストデイかつレイトショーなど
 * #2 : 境界値テストを追加してください。年齢・1日・22時、の3つについて、その境界値
 * #3a: 学生割引を追加します。22歳以下の人は、1,400円にします。
 * #3b: 誕生日割引を導入します。誕生日を含む前後7日は、年齢ごとの値段から、半額にします。（大人900円）
 * #3c: 株主優待割引を導入します。株主優待券を持参した場合は、年齢ごとの値段から、1,000円割引にします。（大人800円）
 * #3d: 団体割引を導入します。10人以上のグループで来た場合は、年齢ごとの値段から、10%を割引します。
 */
