export type JapanPrefectureId =
  "hokkaido" |
  "aomori" |
  "akita" |
  "iwate" |
  "yamagata" |
  "miyagi" |
  "niigata" |
  "fukusima" |
  "ishikawa" |
  "tochigi" |
  "nagano" |
  "gunma" |
  "fukui" |
  "ibaraki" |
  "gifu" |
  "toyama" |
  "saitama" |
  "chiba" |
  "yamanashi" |
  "tokyo" |
  "kyoto" |
  "hyogo" |
  "shimane" |
  "kanagawa" |
  "shiga" |
  "tottori" |
  "shizuoka" |
  "aichi" |
  "okayama" |
  "mie" |
  "hiroshima" |
  "osaka" |
  "yamaguchi" |
  "nara" |
  "kagawa" |
  "wakayama" |
  "tokushima" |
  "ehime" |
  "fukuoka" |
  "kochi" |
  "oita" |
  "saga" |
  "nagasaki" |
  "kumamoto" |
  "miyazaki" |
  "okinawa" |
  "kagoshima"

export type JapanPrefecture = {
  id: JapanPrefectureId
  name: string
  capitalName: string
}

export const japanMap = new Map<JapanPrefectureId, JapanPrefecture>(
  [
    ["hokkaido", {id: "hokkaido",	name: "北海道", capitalName:	"札幌市"}],
    ["aomori", {id: "aomori",	name: "青森県", capitalName:	"青森市"}],
    ["akita", {id: "akita",	name: "秋田県", capitalName:	"秋田市"}],
    ["iwate", {id: "iwate",	name: "岩手県", capitalName:	"盛岡市"}],
    ["yamagata", {id: "yamagata",	name: "山形県", capitalName:	"山形市"}],
    ["miyagi", {id: "miyagi",	name: "宮城県", capitalName:	"仙台市"}],
    ["niigata", {id: "niigata",	name: "新潟県", capitalName:	"新潟市"}],
    ["fukusima", {id: "fukusima",	name: "福島県", capitalName:	"福島市"}],
    ["ishikawa", {id: "ishikawa",	name: "石川県", capitalName:	"金沢市"}],
    ["tochigi", {id: "tochigi",	name: "栃木県", capitalName:	"宇都宮市"}],
    ["nagano", {id: "nagano",	name: "長野県", capitalName:	"長野市"}],
    ["gunma", {id: "gunma",	name: "群馬県", capitalName:	"前橋市"}],
    ["fukui", {id: "fukui",	name: "福井県", capitalName:	"福井市"}],
    ["ibaraki", {id: "ibaraki",	name: "茨城県", capitalName:	"水戸市"}],
    ["gifu", {id: "gifu",	name: "岐阜県", capitalName:	"岐阜市"}],
    ["toyama", {id: "toyama",	name: "富山県", capitalName:	"富山市"}],
    ["saitama", {id: "saitama",	name: "埼玉県", capitalName:	"さいたま市"}],
    ["chiba", {id: "chiba",	name: "千葉県", capitalName:	"千葉市"}],
    ["yamanashi", {id: "yamanashi",	name: "山梨県", capitalName:	"甲府市"}],
    ["tokyo", {id: "tokyo",	name: "東京都", capitalName:	"新宿区"}],
    ["kyoto", {id: "kyoto",	name: "京都府", capitalName:	"京都市"}],
    ["hyogo", {id: "hyogo",	name: "兵庫県", capitalName:	"神戸市"}],
    ["shimane", {id: "shimane",	name: "島根県", capitalName:	"松江市"}],
    ["kanagawa", {id: "kanagawa",	name: "神奈川県", capitalName:	"横浜市"}],
    ["shiga", {id: "shiga",	name: "滋賀県", capitalName:	"大津市"}],
    ["tottori", {id: "tottori",	name: "鳥取県", capitalName:	"鳥取市"}],
    ["shizuoka", {id: "shizuoka",	name: "静岡県", capitalName:	"静岡市"}],
    ["aichi", {id: "aichi",	name: "愛知県", capitalName:	"名古屋市"}],
    ["okayama", {id: "okayama",	name: "岡山県", capitalName:	"岡山市"}],
    ["mie", {id: "mie",	name: "三重県", capitalName:	"津市"}],
    ["hiroshima", {id: "hiroshima",	name: "広島県", capitalName:	"広島市"}],
    ["osaka", {id: "osaka",	name: "大阪府", capitalName:	"大阪市"}],
    ["yamaguchi", {id: "yamaguchi",	name: "山口県", capitalName:	"山口市"}],
    ["nara", {id: "nara",	name: "奈良県", capitalName:	"奈良市"}],
    ["kagawa", {id: "kagawa",	name: "香川県", capitalName:	"高松市"}],
    ["wakayama", {id: "wakayama",	name: "和歌山県", capitalName:	"和歌山市"}],
    ["tokushima", {id: "tokushima",	name: "徳島県", capitalName:	"徳島市"}],
    ["ehime", {id: "ehime",	name: "愛媛県", capitalName:	"松山市"}],
    ["fukuoka", {id: "fukuoka",	name: "福岡県", capitalName:	"福岡市"}],
    ["kochi", {id: "kochi",	name: "高知県", capitalName:	"高知市"}],
    ["oita", {id: "oita",	name: "大分県", capitalName:	"大分市"}],
    ["saga", {id: "saga",	name: "佐賀県", capitalName:	"佐賀市"}],
    ["nagasaki", {id: "nagasaki",	name: "長崎県", capitalName:	"長崎市"}],
    ["kumamoto", {id: "kumamoto",	name: "熊本県", capitalName:	"熊本市"}],
    ["miyazaki", {id: "miyazaki",	name: "宮崎県", capitalName:	"宮崎市"}],
    ["okinawa", {id: "okinawa",	name: "沖縄県", capitalName:	"那覇市"}],
    ["kagoshima", {id: "kagoshima",	name: "鹿児島県", capitalName:	"鹿児島市"}],
  ]
)