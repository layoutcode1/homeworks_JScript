// Homework_14

// --------------
// TASK_01
// -----------------
document.write(`<p>Task_01</p>`)
console.log('======Task_01===')
document.write(`<p style="color: #8ceec0f5;">Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
----- Властивості ------
назва компанії на час розробки (назву періодично змінюють)
--власник компанії
--споснсори (масив спонсорів)
    * прізвище спонсора
    * ім’я  спонсора
    * сума вкладень спонсора
--рік випуску
--вартість сайту
--Знайти:</p>`)

type Sponsor = {
  lastName: string
  firstName: string
  investment: number
}
type Website = {
  companyName: string 
  owner: string 
  sponsors: Sponsor[] 
  releaseYear: number 
  siteCost: number  
}

const websites: Website[] = [
  {
    companyName: "TechSoft",
    owner: "Matvii Tarasenko",
    sponsors: [
      { lastName: "Strichko", firstName: "Taras", investment: 50000 },
      { lastName: "Topoli", firstName: "Anna", investment: 60000 },
    ],
    releaseYear: 2005,
    siteCost: 15000,
  },
  {
    companyName: "WebSolutions",
    owner: "Olena Kovalenko",
    sponsors: [
      { lastName: "Bondar", firstName: "Serhii", investment: 120000 },
    ],
    releaseYear: 2010,
    siteCost: 9000,
  },
  {
    companyName: "NextNetCorp",
    owner: "Vasyl Hrytsen",
    sponsors: [
      { lastName: "Kravchenko", firstName: "Iryna", investment: 30000 },
      { lastName: "Vyrva", firstName: "Dmytro", investment: 80000 },
    ],
    releaseYear: 2003,
    siteCost: 20000,
  },
]

// ----------------------------------------------------------------
// ----------------------------1
// ----------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">1) загальну вартість усіх сайтів</p>`)

const totalCost = websites.reduce((sum, site) => sum + site.siteCost, 0)

document.write(`Загальна вартість усіх сайтів: ${totalCost}`)

// ----------------------------------------------------------------
// ----------------------------2
// ----------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">2) кількість сайтів, що було зроблено між 2000 та 2009 рр.</p>`)

const count2000to2009 = websites.filter(site => site.releaseYear >= 2000 && site.releaseYear <= 2009).length

document.write(`Кількість сайтів між 2000 та 2009: ${count2000to2009}`)

// ----------------------------------------------------------------
// ----------------------------3
// ----------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000</p>`)

const countHighInvestmentSites = websites.filter(site => {
  const totalInvestment = site.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0)
  return totalInvestment > 100000
}).length

document.write(`Кількість сайтів з вкладеннями > 100000: ${countHighInvestmentSites}`)

// ----------------------------------------------------------------
// ----------------------------4
// ----------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">4) створити загальний список усіх спонсорів 
    (поки можуть повторюватись, просто зібрати усі у масив)</p>`)

const allSponsors: Sponsor[] = websites.flatMap(site => site.sponsors)

const sponsors = [
  { lastName: "Strichko", firstName: "Taras", investment: 50000 },
  { lastName: "Dashko", firstName: "Anna", investment: 60000 },
  { lastName: "Bondar", firstName: "Serhii", investment: 120000 },
  { lastName: "Kravchenko", firstName: "Iryna", investment: 30000 },
  { lastName: "Soroka", firstName: "Dmytro", investment: 80000 }
]
let sponsorsHtml = "<ul>"
for (const sponsor of sponsors) {
  sponsorsHtml += `<li>${sponsor.firstName} ${sponsor.lastName}, Внесок: ${sponsor.investment}</li>`
}
sponsorsHtml += "</ul>"
document.write("Загальний список усіх спонсорів:<br>" + sponsorsHtml)

// ---------------------------------------------------------------
// ----------------------------5
// ---------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">5) знайти рік, коли прибуток був найбільшим</p>`)

type SiteProfit = { year: number; profit: number }
const profits: SiteProfit[] = websites.map(site => {
  const totalInvestment = site.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0)
  return { year: site.releaseYear, profit: site.siteCost - totalInvestment }
})
const maxProfitSite = profits.reduce((max, current) => current.profit > max.profit ? current : max, profits[0])
const yearMaxProfit = maxProfitSite.year

document.write(`Рік найбільшого прибутку: ${yearMaxProfit}`)

// ---------------------------------------------------------------
// ----------------------------6
// ---------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">6) упорядкувати список за спаданням прибутку</p>`)
const websitesSortedByProfit = [...websites].sort((a, b) => {
  const profitA = a.siteCost - a.sponsors.reduce((sum, s) => sum + s.investment, 0)
  const profitB = b.siteCost - b.sponsors.reduce((sum, s) => sum + s.investment, 0)
  return profitB - profitA
})

let sortedSitesHtml = "<ol>"
for (const site of websitesSortedByProfit) {
  const totalInvestment = site.sponsors.reduce((sum, s) => sum + s.investment, 0)
  const profit = site.siteCost - totalInvestment
  sortedSitesHtml += `<li>${site.companyName} (${site.releaseYear}) — Прибуток: ${profit}</li>`
}
sortedSitesHtml += "</ol>"

document.write(`Сайти, упорядковані за спаданням прибутку: ${sortedSitesHtml}`)

// ---------------------------------------------------------------
// ----------------------------7
// ---------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">7) Створити 2 окремих списки з копіями об’єктів, що містять 
    сайти з вартість до 10000 і більше 10000</p>`)

const cheapSites = websites.filter(site => site.siteCost <= 10000).map(site => ({ ...site, sponsors: [...site.sponsors] }))
const expensiveSites = websites.filter(site => site.siteCost > 10000).map(site => ({ ...site, sponsors: [...site.sponsors] }))

function renderSitesList(sites: Website[]): string {
  let html = "<ul>"
  for (const site of sites) {
    html += `<li>${site.companyName} (${site.releaseYear}) — Вартість: ${site.siteCost}</li>`
  }
  html += "</ul>"
  return html
}
document.write(`Сайти з вартістю до 10000: ${renderSitesList(cheapSites)}`)
document.write(`Сайти з вартістю більше 10000: ${renderSitesList(expensiveSites)}`)

console.log("1) Загальна вартість усіх сайтів:", totalCost)
console.log("2) Кількість сайтів між 2000 та 2009:", count2000to2009)
console.log("3) Кількість сайтів з вкладеннями > 100000:", countHighInvestmentSites)
console.log("4) Загальний список усіх спонсорів:", allSponsors)
console.log("5) Рік найбільшого прибутку:", yearMaxProfit)
console.log("6) Сайти, упорядковані за спаданням прибутку:", websitesSortedByProfit)
console.log("7) Сайти з вартістю до 10000:", cheapSites)
console.log("7) Сайти з вартістю більше 10000:", expensiveSites)


// ----------------
// TASK_02
// -------------------
document.write(`<p>Task_02</p>`)
document.write(`<p style="color: #8ceec0f5;"> Розробити функцію, у яку передають об’єкт (день, місяць, рік). 
    Визначити, який буде рік через N місяців.</p>`)
console.log('======Task_02===')

type DateObj = {
  day: number
  month: number
  year: number
}
function getDateAfterNMonths(date: DateObj, N: number): { year: number; month: number } {
   const totalMonths = date.month - 1 + N
   const newMonth = (totalMonths % 12) + 1
   const yearShift = Math.floor(totalMonths / 12)
   const newYear = date.year + yearShift
  return { year: newYear, month: newMonth }
}
const userDate: DateObj = {
  day: 28,
  month: 7,
  year: 2021,
}
const N = 61
const result = getDateAfterNMonths(userDate, N)

console.log(`Через ${N} міс. буде: місяць ${result.month}, рік ${result.year}`)
document.write(`Через ${N} міс. буде: місяць ${result.month}, рік ${result.year}`)


// --------------
// TASK_03
// ----------------
document.write(`<p>Task_03</p>`)
document.write(`<p style="color: #8ceec0f5;"> Ось приклад відповіді з одного з сайтів 
  (масив об’єктів з інформацією про товари).</p>`)
document.write('<img src="img/hw14_task03_report.png" style="width:334px; height:auto; transition: width 0.3s ease, margin-left 0.3s ease; cursor: pointer; display: block;" alt="Site response" onclick="if(this.style.width === \'734px\'){ this.style.width = \'334px\'; this.style.marginLeft = \'0\'; } else { this.style.width = \'734px\'; this.style.marginLeft = \'40px\'; }">');
console.log('======Task_03===') 

document.write(`<p style="color: #8ceec0f5;">весь текст масиву, що в кінці документу скопіюєте в код</p>` )
let dataList = [
{
id: 344277463,
    old_price: 1395,
    old_usd_price: '37.70',
    price: 1099,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '29.70',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,    
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 363766641,
    old_price: 0,
    old_usd_price: '0.00',
    price: 90,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '2.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 339273715,
    old_price: 38,
    old_usd_price: '1.03',
    price: 25,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '0.68',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 330746665,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2548,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '68.86',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 344972806,
    old_price: 699,
    old_usd_price: '18.89',
    price: 549,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '14.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 318302299,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 361430565,
    old_price: 3500,
    old_usd_price: '94.59',
    price: 1999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '54.03',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 14429030,
    old_price: 3339,
    old_usd_price: '90.24',
    price: 2999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '81.05',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 56340912,
    old_price: 2094,
    old_usd_price: '56.59',
    price: 1776,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '48.00',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 315292225,
    old_price: 1799,
    old_usd_price: '48.62',
    price: 1499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.51',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 28437961,
    old_price: 42999,
    old_usd_price: '1162.14',
    price: 33999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '918.89',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 339896833,
    old_price: 6399,
    old_usd_price: '172.95',
    price: 5899,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '159.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 364354149,
    old_price: 1600,
    old_usd_price: '43.24',
    price: 1500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.54',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: {
    id: 106,
    discount_price: 1300,
    title: 'ціна по промокоду діє з 22.03 по 28.03',
    price_show_in_site_id: 5151,
    show_in_details: 1,
    show_in_catalog: 1,
    is_description: 1,
    description: 'test',
    promo_code: '',
    url_for_image: 'https://rozetka.com.ua/ua/promo/allgalaxies/',
    images: '',
    images_mobile: '',
    hide_price: 0,
    },
},
{
id: 363184995,
   old_price: 0,
    old_usd_price: '0.00',
    price: 4499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '121.59',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 98077846,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3113,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '84.14',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 310694668,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3000,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '81.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 362812029,
    old_price: 0,
    old_usd_price: '0.00',
    price: 21700,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '586.49',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 361422708,
    old_price: 4100,
    old_usd_price: '110.81',
    price: 2699,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '72.95',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 318302257,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 310694498,
    old_price: 0,
    old_usd_price: '0.00',
    price: 2963,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '80.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 363651273,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 330747022,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2606,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '70.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 362617635,
    old_price: 4872,
    old_usd_price: '131.68',
    price: 2436,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '65.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
{
id: 363614439,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
},
]

// interface DataItem {
//   id: number;
//   old_price: number;
//   old_usd_price: string;
//   price: number;
//   sell_status: string;
//   usd_price: string;
// }

// -----------------------------------------------------------------------
// -------------------------------1
// -----------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">1) Загальну вартість (нові ціни - price);</p>`)

let totalOfNewPricesCost = dataList.reduce((total, item) => total + item.price, 0)

console.log('1) Загальна вартість товарів з маркером price:', totalOfNewPricesCost.toFixed(2))
document.write(`Загальна вартість товарів з маркером price: ${totalOfNewPricesCost.toFixed(2)}`)

// -----------------------------------------------------------------------
// -------------------------------2
// -----------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price);</p>`)

let quantityOfGoodsWithDecreasedPrice = dataList.filter(item => item.price < item.old_price).length

console.log('2) Кількість товарів зі зниженою ціною:', quantityOfGoodsWithDecreasedPrice)
document.write(`Кількість товарів зі зниженою ціною: ${quantityOfGoodsWithDecreasedPrice}`)

// -----------------------------------------------------------------------
// -------------------------------3
// -----------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">3) Товари, які доступні (sell_status:"available"):</p>`)

let availableGoods = dataList.filter(item => item.sell_status === "available")

console.log('3) Кількість доступних товарів:', availableGoods)
document.write(`Кількість доступних товарів: ${availableGoods.length}`)
document.write(`<ul>`)
availableGoods.forEach(item => {
    document.write(`<li>id: ${item.id}</li>`)
})
document.write(`</ul>`)

// -----------------------------------------------------------------------
// -------------------------------4
// -----------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;">4) сформувати новий список об”єктів тільки доступних  для продажу товарів, 
    які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)</p>`)

let onlyIdentifiedGoodsAvailable = availableGoods.map(item => ({
  id: item.id,
  price: item.price,
  old_price: item.old_price,
  usd_price: item.usd_price
}))

console.log('4) Новий список об”єктів. Кількість маркованих товарів:', onlyIdentifiedGoodsAvailable)
document.write(`Новий список об”єктів. Кількість маркованих товарів: ${onlyIdentifiedGoodsAvailable.length}`)
document.write('<ul>')
onlyIdentifiedGoodsAvailable.forEach(item => {
  document.write(`<li> id: ${item.id}, price: ${item.price}, old_price: ${item.old_price}, usd_price: ${item.usd_price}</li>`)
})
