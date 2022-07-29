module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicines', [{
      name: 'Рафамин таблетки для рассасывания',
      img: 'https://f.stolichki.ru/s/drugs/medium/67/67527.jpg',
      price: 448,
      discount: 448,
      stock: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Номидес капсулы 30мг №10', img: 'https://f.stolichki.ru/s/drugs/medium/36/36744.jpg', price: 352, discount: 352, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Кагоцел таблетки 12мг', img: 'https://f.stolichki.ru/s/drugs/medium/42/42556.jpg', price: 501, discount: 501, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Арбидол таблетки покрытые оболочкой 50мг ', img: 'https://f.stolichki.ru/s/drugs/medium/1/1054.jpg', price: 290, discount: 290, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Африн экстро спрей назальный 0,05% 15мл', img: 'https://f.stolichki.ru/s/drugs/medium/12/12140.jpg', price: 217, discount: 217, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Симкоксиб капсулы 200мг', img: 'https://f.stolichki.ru/s/drugs/medium/57/57867.jpg', price: 420, discount: 420, stock: 60, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Новатенол крем 5% 25г', img: 'https://f.stolichki.ru/s/drugs/medium/12/12436.jpg', price: 298, discount: 298, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Теразозин таблетки 5мг', img: 'https://f.stolichki.ru/s/drugs/medium/2/2327.jpg', price: 246, discount: 246, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Остенил Плюс шприц 40мг 2мл', img: 'https://f.stolichki.ru/s/drugs/medium/25/25527.jpg', price: 6250, discount: 6250, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Лавомакс таблетки покрытые оболочкой 125мг', img: 'https://f.stolichki.ru/s/drugs/medium/38/38275.jpg', price: 266, discount: 266, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Симкоксиб капсулы 200мг №30', img: 'https://f.stolichki.ru/s/drugs/large/48/48147.jpg', price: 1071, discount: 1071, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Галавит порошок для инъекций 50мг 10мл №5', img: 'https://f.stolichki.ru/s/drugs/large/22/22792.jpg', price: 735, discount: 735, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Лефокцин таблетки 500мг №10', img: ' https://f.stolichki.ru/s/drugs/large/41/41051.jpg', price: 508, discount: 508, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Дапсон таблетки 50мг №100', img: 'https://f.stolichki.ru/s/drugs/large/41/41812.jpg', price: 1595, discount: 1595, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Солгар Неронутриентс капсулы №30', img: 'https://f.stolichki.ru/s/drugs/large/22/22603.jpg', price: 1020, discount: 1020, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Артрофлекс капсулы №30', img: 'https://f.stolichki.ru/s/drugs/large/41/41744.jpg', price: 765, discount: 765, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Мукосат капсулы 577,58мг №80', img: 'https://f.stolichki.ru/s/drugs/large/47/47021.jpg', price: 1760, discount: 1760, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Имбирол капсулы 300мг №30', img: 'https://f.stolichki.ru/s/drugs/large/63/63293.jpg', price: 435, discount: 435, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Шалфей Эвалар таблетки для рассасывания №20', img: 'https://f.stolichki.ru/s/drugs/large/17/17638.jpg', price: 161, discount: 161, stock: 30, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тирамин таблетки №40', img: 'https://f.stolichki.ru/s/drugs/large/38/38377.jpg', price: 663, discount: 663, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Пантокрин Пантея экстракт жид. Эвалар 50мл', img: 'https://f.stolichki.ru/s/drugs/medium/12/12736.jpg', price: 415, discount: 415, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Бриония С-6 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4586.jpg', price: 191, discount: 191, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Глимепирид таблетки 4мг', img: 'https://f.stolichki.ru/s/drugs/medium/33/33225.jpg', price: 237, discount: 237, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Глюкоза раствор для инъекций 40% 10мл', img: 'https://f.stolichki.ru/s/drugs/medium/30/30089.jpg', price: 49, discount: 49, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Эрмиталь капсулы 36 т ЕД', img: 'https://f.stolichki.ru/s/drugs/medium/6/6315.jpg', price: 968, discount: 968, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Сталораль Аллерген клещей фл. 10мл', img: 'https://f.stolichki.ru/s/drugs/medium/8/8764.jpg', price: 6498, discount: 6498, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Гентос таблетки гомеопатические', img: 'https://f.stolichki.ru/s/drugs/medium/26/26293.jpg', price: 381, discount: 381, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Лотосоник таблетки покрытые оболочкой', img: 'https://f.stolichki.ru/s/drugs/medium/26/26404.jpg', price: 163, discount: 163, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Леовит Успокаивающие травы таблетки 0,55г', img: 'https://f.stolichki.ru/s/drugs/medium/8/8671.jpg', price: 164, discount: 164, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Зайчонок пастилки жевательные', img: 'https://f.stolichki.ru/s/drugs/medium/3/3559.jpg', price: 365, discount: 365, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Пиявка медицинская < 0,6г', img: 'https://f.stolichki.ru/s/drugs/medium/45/45648.jpg', price: 125, discount: 125, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Риниколд ХотМикс порошок Лимон', img: 'https://f.stolichki.ru/s/drugs/medium/12/12967.jpg', price: 228, discount: 228, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Анвимакс Лимон/мед порошок 5г', img: 'https://f.stolichki.ru/s/drugs/medium/2/2231.jpg', price: 404, discount: 404, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Диклофенак суппозитории ректальные 100мг', img: 'https://f.stolichki.ru/s/drugs/medium/5/5305.jpg', price: 46, discount: 46, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Хиалубрикс протез синовиальной жидкости 1,5% 2мл', img: 'https://f.stolichki.ru/s/drugs/medium/41/41119.jpg', price: 8140, discount: 8140, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Купить Арника монтана С-6 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4987.jpg', price: 191, discount: 191, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Меронем порошок лиофилизат для инъекций 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/5/5470.jpg', price: 5915, discount: 5915, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Кларитромицин таблетки покрытые оболочкой 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/50/50395.jpg', price: 505, discount: 505, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тыква семена Здоровье 50г', img: 'https://f.stolichki.ru/s/drugs/medium/28/28240.jpg', price: 55, discount: 55, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Цефотаксим порошок для инъекций 1г', img: 'https://f.stolichki.ru/s/drugs/medium/1/1410.jpg', price: 30, discount: 30, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Эдас-307 Бриапис сироп 100мл', img: 'https://f.stolichki.ru/s/drugs/medium/26/26117.jpg', price: 176, discount: 176, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Эдас-116 Афосар капли 25мл', img: 'https://f.stolichki.ru/s/drugs/medium/15/15659.jpg', price: 123, discount: 123, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Анальгин-Ультра таблетки 500мг', img: 'https://f.stolichki.ru/s/drugs/medium/23/23275.jpg', price: 89, discount: 89, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Дисоль раствор для инфузий 400мл', img: 'https://f.stolichki.ru/s/drugs/medium/22/22415.jpg', price: 79, discount: 79, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Рисполепт Конста порошок для приготовления суспензии внутримышечно 25мг', img: 'https://f.stolichki.ru/s/drugs/medium/30/30767.jpg', price: 4541, discount: 4541, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Синдранол таблетки пролонгированные 2мг', img: 'https://f.stolichki.ru/s/drugs/medium/39/39994.jpg', price: 525, discount: 525, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Новалгин таблетки 50мг+200мг+200мг', img: 'https://f.stolichki.ru/s/drugs/medium/32/32189.jpg', price: 192, discount: 192, stock: 50, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Коффеа Арабика С-30 гранулы 10г', img: 'https://f.stolichki.ru/s/drugs/medium/4/4429.jpg', price: 172, discount: 172, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Эрмиталь капсулы 36 т ЕД', img: 'https://f.stolichki.ru/s/drugs/medium/19/19752.jpg', price: 387, discount: 387, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Алкодетокс таблетки №10', img: 'https://f.stolichki.ru/s/drugs/medium/45/45953.jpg', price: 197, discount: 197, stock: 40, createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medicines', null, {});
  },
};
