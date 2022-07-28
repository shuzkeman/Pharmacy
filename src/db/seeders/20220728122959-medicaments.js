module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicaments', [{
      name: 'Рафамин таблетки для рассасывания',
      img: 'https://f.stolichki.ru/s/drugs/medium/67/67527.jpg',
      Price: 448,
      DiscountPrice: 448,
      Stock: 50,
    },
    {
      name: 'Номидес капсулы 30мг №10', img: 'https://f.stolichki.ru/s/drugs/medium/36/36744.jpg', Price: 352, DiscountPrice: 352, Stock: 30,
    },
    {
      name: 'Кагоцел таблетки 12мг', img: 'https://f.stolichki.ru/s/drugs/medium/42/42556.jpg', Price: 501, DiscountPrice: 501, Stock: 40,
    },
    {
      name: 'Арбидол таблетки покрытые оболочкой 50мг ', img: 'https://f.stolichki.ru/s/drugs/medium/1/1054.jpg', Price: 290, DiscountPrice: 290, Stock: 40,
    },
    {
      name: 'Африн экстро спрей назальный 0,05% 15мл', img: 'https://f.stolichki.ru/s/drugs/medium/12/12140.jpg', Price: 217, DiscountPrice: 217, Stock: 50,
    },
    {
      name: 'Симкоксиб капсулы 200мг', img: 'https://f.stolichki.ru/s/drugs/medium/57/57867.jpg', Price: 420, DiscountPrice: 420, Stock: 60,
    },
    {
      name: 'Новатенол крем 5% 25г', img: 'https://f.stolichki.ru/s/drugs/medium/12/12436.jpg', Price: 298, DiscountPrice: 298, Stock: 30,
    },
    {
      name: 'Теразозин таблетки 5мг', img: 'https://f.stolichki.ru/s/drugs/medium/2/2327.jpg', Price: 246, DiscountPrice: 246, Stock: 40,
    },
    {
      name: 'Остенил Плюс шприц 40мг 2мл', img: 'https://f.stolichki.ru/s/drugs/medium/25/25527.jpg', Price: 6250, DiscountPrice: 6250, Stock: 40,
    },
    {
      name: 'Лавомакс таблетки покрытые оболочкой 125мг', img: 'https://f.stolichki.ru/s/drugs/medium/38/38275.jpg', Price: 266, DiscountPrice: 266, Stock: 30,
    },
    {
      name: 'Симкоксиб капсулы 200мг №30', img: 'https://f.stolichki.ru/s/drugs/large/48/48147.jpg', Price: 1071, DiscountPrice: 1071, Stock: 30,
    },
    {
      name: 'Галавит порошок для инъекций 50мг 10мл №5', img: 'https://f.stolichki.ru/s/drugs/large/22/22792.jpg', Price: 735, DiscountPrice: 735, Stock: 50,
    },
    {
      name: 'Лефокцин таблетки 500мг №10', img: ' https://f.stolichki.ru/s/drugs/large/41/41051.jpg', Price: 508, DiscountPrice: 508, Stock: 30,
    },
    {
      name: 'Дапсон таблетки 50мг №100', img: 'https://f.stolichki.ru/s/drugs/large/41/41812.jpg', Price: 1595, DiscountPrice: 1595, Stock: 30,
    },
    {
      name: 'Солгар Неронутриентс капсулы №30', img: 'https://f.stolichki.ru/s/drugs/large/22/22603.jpg', Price: 1020, DiscountPrice: 1020, Stock: 50,
    },
    {
      name: 'Артрофлекс капсулы №30', img: 'https://f.stolichki.ru/s/drugs/large/41/41744.jpg', Price: 765, DiscountPrice: 765, Stock: 40,
    },
    {
      name: 'Мукосат капсулы 577,58мг №80', img: 'https://f.stolichki.ru/s/drugs/large/47/47021.jpg', Price: 1760, DiscountPrice: 1760, Stock: 40,
    },
    {
      name: 'Имбирол капсулы 300мг №30', img: 'https://f.stolichki.ru/s/drugs/large/63/63293.jpg', Price: 435, DiscountPrice: 435, Stock: 50,
    },
    {
      name: 'Шалфей Эвалар таблетки для рассасывания №20', img: 'https://f.stolichki.ru/s/drugs/large/17/17638.jpg', Price: 161, DiscountPrice: 161, Stock: 30,
    },
    {
      name: 'Тирамин таблетки №40', img: 'https://f.stolichki.ru/s/drugs/large/38/38377.jpg', Price: 663, DiscountPrice: 663, Stock: 40,
    },
    {
      name: 'Пантокрин Пантея экстракт жид. Эвалар 50мл', img: 'https://f.stolichki.ru/s/drugs/medium/12/12736.jpg', Price: 415, DiscountPrice: 415, Stock: 50,
    },
    {
      name: 'Бриония С-6 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4586.jpg', Price: 191, DiscountPrice: 191, Stock: 40,
    },
    {
      name: 'Глимепирид таблетки 4мг', img: 'https://f.stolichki.ru/s/drugs/medium/33/33225.jpg', Price: 237, DiscountPrice: 237, Stock: 50,
    },
    {
      name: 'Глюкоза раствор для инъекций 40% 10мл', img: 'https://f.stolichki.ru/s/drugs/medium/30/30089.jpg', Price: 49, DiscountPrice: 49, Stock: 50,
    },
    {
      name: 'Эрмиталь капсулы 36 т ЕД', img: 'https://f.stolichki.ru/s/drugs/medium/6/6315.jpg', Price: 968, DiscountPrice: 968, Stock: 50,
    },
    {
      name: 'Сталораль Аллерген клещей фл. 10мл', img: 'https://f.stolichki.ru/s/drugs/medium/8/8764.jpg', Price: 6498, DiscountPrice: 6498, Stock: 40,
    },
    {
      name: 'Гентос таблетки гомеопатические', img: 'https://f.stolichki.ru/s/drugs/medium/26/26293.jpg', Price: 381, DiscountPrice: 381, Stock: 50,
    },
    {
      name: 'Лотосоник таблетки покрытые оболочкой', img: 'https://f.stolichki.ru/s/drugs/medium/26/26404.jpg', Price: 163, DiscountPrice: 163, Stock: 50,
    },
    {
      name: 'Леовит Успокаивающие травы таблетки 0,55г', img: 'https://f.stolichki.ru/s/drugs/medium/8/8671.jpg', Price: 164, DiscountPrice: 164, Stock: 50,
    },
    {
      name: 'Зайчонок пастилки жевательные', img: 'https://f.stolichki.ru/s/drugs/medium/3/3559.jpg', Price: 365, DiscountPrice: 365, Stock: 50,
    },
    {
      name: 'Пиявка медицинская < 0,6г', img: 'https://f.stolichki.ru/s/drugs/medium/45/45648.jpg', Price: 125, DiscountPrice: 125, Stock: 40,
    },
    {
      name: 'Риниколд ХотМикс порошок Лимон', img: 'https://f.stolichki.ru/s/drugs/medium/12/12967.jpg', Price: 228, DiscountPrice: 228, Stock: 50,
    },
    {
      name: 'Анвимакс Лимон/мед порошок 5г', img: 'https://f.stolichki.ru/s/drugs/medium/2/2231.jpg', Price: 404, DiscountPrice: 404, Stock: 50,
    },
    {
      name: 'Диклофенак суппозитории ректальные 100мг', img: 'https://f.stolichki.ru/s/drugs/medium/5/5305.jpg', Price: 46, DiscountPrice: 46, Stock: 50,
    },
    {
      name: 'Хиалубрикс протез синовиальной жидкости 1,5% 2мл', img: 'https://f.stolichki.ru/s/drugs/medium/41/41119.jpg', Price: 8140, DiscountPrice: 8140, Stock: 50,
    },
    {
      name: 'Купить Арника монтана С-6 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4987.jpg', Price: 191, DiscountPrice: 191, Stock: 50,
    },
    {
      name: 'Меронем порошок лиофилизат для инъекций 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/5/5470.jpg', Price: 5915, DiscountPrice: 5915, Stock: 40,
    },
    {
      name: 'Кларитромицин таблетки покрытые оболочкой 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/50/50395.jpg', Price: 505, DiscountPrice: 505, Stock: 50,
    },
    {
      name: 'Тыква семена Здоровье 50г', img: 'https://f.stolichki.ru/s/drugs/medium/28/28240.jpg', Price: 55, DiscountPrice: 55, Stock: 40,
    },
    {
      name: 'Цефотаксим порошок для инъекций 1г', img: 'https://f.stolichki.ru/s/drugs/medium/1/1410.jpg', Price: 30, DiscountPrice: 30, Stock: 50,
    },
    {
      name: 'Эдас-307 Бриапис сироп 100мл', img: 'https://f.stolichki.ru/s/drugs/medium/26/26117.jpg', Price: 176, DiscountPrice: 176, Stock: 40,
    },
    {
      name: 'Эдас-116 Афосар капли 25мл', img: 'https://f.stolichki.ru/s/drugs/medium/15/15659.jpg', Price: 123, DiscountPrice: 123, Stock: 40,
    },
    {
      name: 'Анальгин-Ультра таблетки 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/23/23275.jpg', Price: 89, DiscountPrice: 89, Stock: 50,
    },
    {
      name: 'Дисоль раствор для инфузий 400мл', img: 'https://f.stolichki.ru/s/drugs/medium/22/22415.jpg', Price: 79, DiscountPrice: 79, Stock: 50,
    },
    {
      name: 'Рисполепт Конста порошок для приготовления суспензии внутримышечно 25мг', img: 'https://f.stolichki.ru/s/drugs/medium/30/30767.jpg', Price: 4541, DiscountPrice: 4541, Stock: 40,
    },
    {
      name: 'Синдранол таблетки пролонгированные 2мг', img: 'https://f.stolichki.ru/s/drugs/medium/39/39994.jpg', Price: 525, DiscountPrice: 525, Stock: 40,
    },
    {
      name: 'Новалгин таблетки 50мг+200мг+200мг', img: 'https://f.stolichki.ru/s/drugs/medium/32/32189.jpg', Price: 192, DiscountPrice: 192, Stock: 50,
    },
    {
      name: 'Коффеа Арабика С-30 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4429.jpg', Price: 172, DiscountPrice: 172, Stock: 40,
    },
    {
      name: 'Эрмиталь капсулы 36 т ЕД', img: 'https://f.stolichki.ru/s/drugs/medium/19/19752.jpg', Price: 387, DiscountPrice: 387, Stock: 40,
    },
    {
      name: 'Алкодетокс таблетки №10', img: 'https://f.stolichki.ru/s/drugs/medium/45/45953.jpg', Price: 197, DiscountPrice: 197, Stock: 40,
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medicaments', null, {});
  },
};
