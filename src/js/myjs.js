let siteType = prompt("Пожалуйста уточните тип сайта: визитка, интернет магазин, блог");
let design=prompt("Выберите тип дизайна: наш, ваш");
let responsiveness=prompt("Нужна ли вам адаптивность сайта под все устройства: да, только ПК, мобильная версия");

    if (siteType.toLocaleLowerCase()==='визитка'|| siteType*1 === 1)
        {var siteTypePrice= 5000;
          var siteTypeTiming=2;
        }
else if (siteType.toLocaleLowerCase()==='интернет магазин'|| siteType*1 === 2)
        { siteTypePrice= 9000;
         siteTypeTiming =14;
        }
else if (siteType.toLocaleLowerCase()==='блог'|| siteType*1 === 3)
        { siteTypePrice= 7000;
         siteTypeTiming=7;
        }

if (design.toLocaleLowerCase()==='наш'|| design*1 === 1)
        {var designPrice= 1000;
         var desingTiming=2;
        }
else if (design.toLocaleLowerCase()==='ваш'|| design*1 === 2)
        { designPrice= 500;
          desingTiming=1;
        }


if (responsiveness.toLocaleLowerCase()==='да'|| responsiveness*1 === 1)
        {var responsivenessPrice= 3000;
         var responsivenessTiming=3;
        }
else if (responsiveness.toLocaleLowerCase()==='только пк'|| responsiveness*1 === 2)
        { responsivenessPrice= 600;
          responsivenessTiming=1;
        }
else if (responsiveness.toLocaleLowerCase()==='мобильная версия'|| responsiveness*1 === 3)
        {responsivenessPrice= 800;
          responsivenessTiming=2;
        }

let price={siteTypePrice,designPrice,responsivenessPrice};
let timing =[siteTypeTiming, desingTiming, responsivenessTiming] ;

price=price.siteTypePrice +price.designPrice+price.responsivenessPrice;

timing =timing[0]+timing[1]+timing[2];

if(timing<5)
{alert ("Срок выполнения "+timing+" дня, Стоимость работ составит " + price+" рублей.");}
else 
{alert ("Срок выполнения "+timing+" дней, Стоимость работ составит " + price+" рублей.");}

