BEGIN;
-- Note: for apostrophes, use this character '’' or 'Brewer\'s yeast.'

-- 1. Guinness (Dublin, Ireland)
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Guinness Draught',
        4.2,
        20,
        'Stout',
        'Rich and creamy. Distinctively black. Velvety in its finish. This iconic beer is defined by harmony. Sip after sip, sweet counters bitter as the malt arrives on cue to complement a base of roasted barley.',
        'https://www.guinness.com/en/our-beers/guinness-draught/',
        true,
        1);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Guinness Original',
        5,
        20,
        'Stout',
        'Distinctively black full bodied liquid with a rich creamy head. A direct descendant of our archival recipes, Guinness Original is based on a beer first brewed in 1821, when Arthur Guinness II set down precise instructions for brewing his Superior Porter.',
        'https://www.guinness.com/en/our-beers/guinness-original/',
        true,
        1);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Guinness Dublin Porter',
        3.8,
        10,
        'Porter',
        'Sip Dublin Porter and you’re sampling Guinness history. Light but well rounded. Sweet and smooth. Just bitter enough. This is a beer inspired by an archival recipe from our brewers’ diaries, dating back to 1796.',
        'https://www.guinness.com/en/our-beers/guinness-dublin-porter/',
        true,
        1);


-- 2. Guinness Open Gate Brewery (Baltimore, MD)
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Baltimore Blonde',
        5,
        30,
        'Blonde Ale',
        'Clean cracker malt, effervescent taste. Guinness Blonde is this brewery’s flagship beer. Introduced in 2013, this beer is now brewed in the big brewhouse on-site here at the Guinness Open Gate Brewery.',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinness-open-gate-brewery-barrel-house-the-first-guinness-news-photo-1009721008-1533931566.jpg?crop=1.00xw:0.752xh;0,0.142xh&resize=1200:*',
        true,
        2);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Guinness IPA',
        6.5,
        45,
        'American India Pale Ale',
        'A mixture of West and East Coast styles featuring a blend of Centennial, Mosaic, Simcoe, and El Dorado hops.',
        'https://storage.googleapis.com/cdn.thelondoneconomic.com/wp-content/uploads/2018/04/Guinness-Open-Gate-Brewery-Citra-IPA-Glass-Shot_preview.jpeg',
        true,
        2);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('El Dorado Amber Ale',
        4.8,
        20,
        'American Amber Ale',
        'Crisp, dry finish. Low bitterness. Balanced malt sweetness. Our modern update on the classic American Amber Ale feature a blend of El Dorado and Loral hops, adding a light citrus aroma to the sweet malt.',
        'https://beeralien.com/wp-content/uploads/2021/08/guinness_el_dorado_amber_ale_h-768x512.jpg',
        true,
        2);


-- 3. Jersey Girl Brewing Company (Hackettstown, NJ)
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Shark Attack',
        4.5,
        30,
        'Irish Red Ale',
        'This Irish red ale pours rich ruby red in color with a thick creamy head. Soft toffee and a moderate level of caramel flavor, with a toast character. A sweet nose & hints of malt. On the palate it is smooth, creamy, and balanced.',
        'https://jerseygirlbrewing.square.site/product/shark-attack-to-go/367?cs=true&cst=custom',
        true,
        3);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Pocket Full of Porter',
        4.2,
        30,
        'Porter',
        'Pocket full of porter is a beer that is exceptionally dark with a rich and creamy deep flavor profile layered with hints of hazelnut, milk chocolate, caramel, and lightly toasted marshmallow. Its aroma and smooth taste embody all that a dark beer should be. Cheers!',
        'https://jerseygirlbrewing.square.site/product/pocket-full-of-porter-to-go/363?cs=true&cst=custom',
        true,
        3);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Bjorn To Be Wild',
        5.1,
        30,
        'India Pale Ale',
        'Bjorn to be Wild is the third iteration of our Bjorn Series of hazy IPAs fermented with Norwegian Farmhouse Yeast. We used big hop additions of Sabro, Equanot, and Ariana hops for a burst of tropical citrus and bold tangerine with undertones of peaches, lime, and herbal vanilla.',
        'https://jerseygirlbrewing.square.site/product/bjorn-to-be-wild-to-go/352?cs=true&cst=custom',
        true,
        3);


-- 4. Asbury Park Brewery (Asbury Park, NJ)
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Roasted Stout',
        4.9,
        29.8,
        'Irish Stout',
        'A dry Irish style stout with mild sweetness and notes of coffee and chocolate imparted by roasted malts and flaked oats. ABV 4.9% IBU 29.8 ',
        'https://robbedford.files.wordpress.com/2018/11/apb_roastedstout.jpg?w=924',
        false,
        4);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Sea Dragon',
        7,
        65,
        'India Pale Ale',
        'An unfiltered, East Coast IPA loaded with hops for a huge nose of citrus and pine and a classic bitter finish. ABV 7% IBU 65',
        'https://www.passionvines.com/images/sites/passionvines/labels/asbury-park-brewery-sea-dragon_1.jpg',
        false,
        4);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Blonde',
        4.9,
        24,
        'Lager',
        'A light bodied, European style lager featuring Czech and German hops and the highest quality, imported malts. ABV 4.9% IBU 24',
        'https://images.squarespace-cdn.com/content/58648ec4d2b8574e99b3ce34/1483575644018-TJQ23TR27BW4XE50PGEG/?content-type=image%2Fjpeg',
        false,
        4);


-- 5. 7 Mile Brewery
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Whose Berliner Is It Anyway',
        4.0,
        9,
        'Berliner Weisser',
        'A little sweet and a little sour best describes this classic style made in a non-traditional method. Most sours of this style are lactose fermented instead we used a new wild yeast strain developed by the USciences Philly which generates lactic acid before generating alcohol...we then racked it over 80# of fresh tangerine puree...giving it a tart and sweet orangey flavor...4% ABV extremely crushable.',
        'https://untappd.com/b/7-mile-brewery-whose-berliner-is-it-anyway/4149230',
        true,
        5);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Tsar Bomber',
        9.5,
        28,
        'Russian Imperial Stout',
        'Rich, Dark, Roasted...with a milk chocolate flair. Big on flavor...A bomb of a beer...',
        'https://untappd.com/b/7-mile-brewery-tsarbomba/3483595/photos',
        true,
        5);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Cashmere Hoodie',
        5.0,
        18,
        'Golden Ale',
        'Much Like the former Cashmere Sweater Light Lager, This variant is fermented quickly using an ale strain, a little more estery typical of the style this golden ale will finish a littler sweeter. Now available in cans! ',
        'https://untappd.com/b/7-mile-brewery-cashmere-hoodie/4176426',
        true,
        5);


-- 6. Cape May Brewery
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Cap May IPA',
        6.3,
        63,
        'India Pale Ale',
        'The American IPA named for America’s Oldest Seaside Resort, Cape May IPA is loaded with floral and citrus notes, well-balanced with a zesty finish. A West Coast-style IPA brewed in the heart of the East Coast, it’s the beer that’s Crafted on the Cape.',
        'https://www.capemaybrewery.com/beers/cape-may-ipa/',
        true,
        6);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Cape May White',
        5.2,
        11,
        'Wheat Ale',
        'Cape May White is brewed with orange and lemon peels, coriander, grains of paradise, and our favorite Belgian Witbier yeast. Fruity esters up-front with an easy-drinking finish yields a traditional Belgian-Style Wheat Ale brewed in the heart of the East Coast.',
        'https://www.capemaybrewery.com/beers/cape-may-white/',
        true,
        6);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Devil`s Reach',
        8.6,
        25,
        'Belgian Ale',
        'A Belgian beast, fruity and light, the complexity and character of Devil’s Reach come from a robust Belgian yeast. Deceptively simple, caution is demanded because, before you know it, Devil’s Reach has swallowed you whole.',
        'https://www.capemaybrewery.com/beers/devils-reach/',
        true,
        6);


-- 7. Artisan's Brewery
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Irish Red Ale',
        5.7,
        40,
        'Irish Red Ale',
        'The most noticed flavor will be a moderate caramel maltiness, sometimes running into a buttered toast or toffee character, especially if diacetyl is present. The swallow will highlight light roasted grain qualities helping to dry out the finish.',
        'https://images.app.goo.gl/G94XpZkryXS9cPAT6',
        true,
        7);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Jersey Shore IPA',
        6.2,
        32,
        'American Style India Pale Ale',
        'American style; amber in color, medium bodied, beautiful hop aromas from German Hercules and Nugget hop the boil, Galena and Warrior to finish. Malt bill is 2 row, dark Munich, light crystal and some toasted barley to balance with a gentle caramel, biscuit malt flavor.',
        'https://untappd.akamaized.net/photos/2020_10_26/6a8e5aa2e8612ca4ff7d4e9682e9d4ab_640x640.jpg',
        true,
        7);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('American Blonde Ale',
        4.9,
        23,
        'Light Ale',
        'Light in color, hopped with Cascade and Centennial; lightly dry hopped with Centennial',
        'https://images.app.goo.gl/DkkGS8XEzYsMCAPu7',
        true,
        7);


-- 8. Brix City Brewing
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Brix City Porter Authority',
        7.0,
        50,
        'American Porter',
        'Our year-round Porter brewed with a choice selection of dark malts and named for a frequented NY landmark. Loaded with notes of roasted coffee beans, dark chocolate & cacao nibs.',
        'https://untappd.akamaized.net/photos/2021_06_20/41d583c8a1d11e0253852229dd5a2901_640x640.jpg',
        true,
        8);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Brix City Triple Whirlpool',
        8.0,
        60,
        'Double IPA',
        'NE style DIPA Double Dry Hopped with Simcoe+Citra+Sultana for a blast of juicy hop flavor. No lactose in this one! Notes of Dole pineapple juicy, ripe papaya, and freshly juiced citrus balanced by a hint of earthy spice.',
        'https://i.pinimg.com/originals/fe/d5/1c/fed51ce04caf88e1b0aae3652cd411b1.jpg',
        true,
       8);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Brix City Tasty Jams',
        6.5,
        23,
        'NE IPA',
        'Our favorite NE style IPA Double Dry Hopped with loads of Citra+Mosaic. Juicy notes of mixed berries, zesty citrus, and assorted tropical fruits.',
        'https://untappd.akamaized.net/photos/2021_05_12/e486c22133fe1267ce5e83cafc05f378_640x640.jpg',
        true,
        8);


-- 9. Carlow Brewing Company
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('O’Hara’s Irish Stout',
        4.3,
        36,
        'Irish Stout',
        'The flagship of the O’Hara’s brand, this uniquely Irish stout brings one back to how Irish stouts used to taste. First brewed in 1999, it has since been awarded prestigious honours for its quality and authenticity. O’Hara’s Irish Stout has a robust roast flavour complemented by a full-bodied and smooth mouth feel.',
        'https://www.carlowbrewing.com/wp-content/uploads/2013/09/Stout-glsss-bottle-for-Stout-Page.png',
        true,
        9);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('O’Hara’s Irish Red',
        4.3,
        34,
        'Red Ale',
        'This Red stands out in this beer style category. The malt body is as impressive as a bock, albeit in a uniquely Irish way. With an incredibly smooth malt body complimented by caramel tones and perfectly balanced in bitterness, this Irish Red is much more complex than it’s mainstream rivals.',
        'https://www.carlowbrewing.com/wp-content/uploads/2013/10/Red-glsss-bottle-for-Red-Page1.png',
        true,
        9);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('O’Hara’s Irish Pale Ale',
        5.2,
        45,
        'Irish Pale Ale',
        'A Contemporary style IPA with an Irish twist. Combining the balance of European IPAs with the generous dry hopping of American pale ales (APAs), this beer is everything an IPA should be and more.',
        'https://www.carlowbrewing.com/wp-content/uploads/2013/10/IPA-glsss-bottle-for-IPA-Page.png',
        true,
        9);


-- 10. 9 White Deer Brewery
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Stag Bán',
        4.5,
        40,
        'India Pale Ale',
        'Stag Bán is  an easy going beer brewed at lower temperatures to create a cleaner profile, the malt profile is an uncomplicated design to give somebody to the beer without being heavy or cloying.',
        'https://www.9whitedeer.ie/product/stag-ban-case-12-x-500ml/#iLightbox[product-gallery]/0',
        true,
        10);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Stag Rua',
        4.2,
        35,
        'Irish Red Ale',
        'Stag Rua is a beer with big malt flavours and it’s our impression of a perfect Irish Red Ale.  The body is moderate meaning it’s not a heavy beer with an ABV of 4.2%. The flavour profile of Stag Rua is full of irresistible chocolate, caramel and toffee characteristics.',
        'https://www.9whitedeer.ie/product/stag-rua-case-12-x-500ml/#iLightbox[product-gallery]/0',
        true,
        10);

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Stag Stout',
        4.2,
        35,
        'Irish Stout',
        'This is a double chocolate and Madagascan vanilla stout,  Stag stout is Ireland’s first gluten free stout, based on the same recipe as our draft stout but with heaps of cacao nibs and vanilla but this version is bursting with chocolate. This is a rich and luxurious beer with incredible smoothness.',
        'https://www.9whitedeer.ie/product/stag-stout-case-12-x-500ml-copy/#iLightbox[product-gallery]/0',
        true,
        10);


-- Hansa Brewery
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Bye Felicia!',
        5.2,
        21,
        'Nut Brown Ale',
        'The perfect bier to say �Bye!� to last year and �Hello!� to a fresh start! Complex
 malt profile with chocolate malt, honey malt, and crystal rye. Very sessionable and a touch on the sweet side.',
        'no img',
        true,
        16);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Black Flag',
        4.7,
        23,
        'Schwarzbier',
        'Dark brown German lager with an undertone of caramel, toffee, and light roast coffee.
 Clean and smooth in taste with some floral German hop taste',
        'no img',
        true,
        7);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('S.I.P.A.',
        7.0,
        88,
        'German IPA',
        'A German interpretation of an American IPA with a caramel malt backbone. We use five
 new German hop varieties that give it a melon and subtle strawberry character. Assertive bitterness
  and refreshingly floral.',
        'no img',
        true,
        7);

-- Market Garden Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Nano OG',
        4.3,
        68,
        'Lager',
        'This pale lager is a throwback to how beer was brewed in America more than 100 years ago. 
Another Great American Beer Festival award winner, it is crisp, brilliant, and refreshing with a 
delicate malt body and a snappy hop finish; Nano keeps you dominating all day.',
        'no img',
        true,
        8);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Progress Pilsner',
        5.5,
        60,
        'Pilsner',
        'Inspired by the pilsners of the Rhine region of Germany, this Great American Beer Festival
 award-winning lager is a tribute to the crisp and clean character of the noble hop and has just the
  right malt body to balance to perfection. Born on the Rhine, brewed on the Cuyahoga. This, friends,
   is sunlight in a glass!',
        'no img',
        true,
        8);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Hyper Haze',
        6.5,
        60,
        'Hazy IPA',
        'A firework of tropical hop aroma from late additions of Mosaic and Azacca hops. Its 
low bitterness and soft malt profile comes together for this citrus-centric, juicy IPA',
        'no img',
        true,
        9);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Frosty Lime Wit',
        5.5,
        50,
        'Hazy IPA',
        'Frosty leads off with an exhilarating aroma of lime and tangerine. Spicy Belgian yeast 
character plays with the limes tartness leading to a dry, quenching finish that pushes further into 
new flavor territory thanks to the judicious use of diverse ingredients sure to keep you feeling Frosty.',
        'no img',
        true,
        9);

-- Masthead Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Falling Fruit',
        5.8,
        45,
        'Fruit Beer',
        'We set out to create a beer that showcases two of our favorite fruits: tart apples
 and sweet peaches. We fermented it on the fruit with one of our favorite yeasts to give it a juicy 
 character, pleasant body, and just enough sweetness to evoke memories of biting into a fresh peach 
 or apple.',
        'https://beer.untappd.com/labels/2477127',
        true,
        10);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Robot Santa Christmas Ale',
        5.8,
        35,
        'Winter Ale',
        'After the robot uprising you will be leaving Robot Santa a Christmas 
Ale brewed with cinnamon, ginger, nutmeg, coriander, honey and orange peel.',
        'https://beer.untappd.com/labels/3543126',
        true,
        10);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Saturday Transfer',
        7.5,
        79,
        'New England IPA',
        'This NEIPA was brewed and double dry hopped with a bunch of 
Mosaic. Expect a soft mouthfeel and bitterness paired with huge tropical hop flavors 
and aroma.',
        'https://beer.untappd.com/labels/2886738',
        true,
        13);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Big Hairy American Winning Machines',
        9.2,
        66,
        'New England Triple IPA',
        'We were off looking in the cooler and there they were. 
Citra, El Dorado, and Australian Galaxy; they just happen to be some of the best 
hops there are. Our staff grabbed them and they just smelled like excellence so we 
took them and brewed this beer.',
        'https://beer.untappd.com/labels/4029532',
        true,
        13);

-- Nano Brew Cleveland

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Lager Life',
        4.5,
        45,
        'Lager',
        'Bright, crisp, light, and just downright delicious! 
Brewed with a touch of rice for a dry but thirst-quenching beverage. Let LIFE give 
you a beer. Trust us, you will be better off with one in your hand. Get a LIFE!',
        'no img',
        true,
        14);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Hola Cerveza Mexican',
        5.0,
        58,
        'Mexican Lager',
        'Crisp, clean and refreshing with sweet aromatics of lemon, lime and 
caramelized maize corn. This 5% quencher starts the fiesta',
        'no img',
        true,
        14);

-- Noble Beast Brewing

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Union Pils',
        4.9,
        36,
        'Bohemian Lager',
        'Traditionally brewed with a double-decoction mash to enhance malt flavor and balanced with 
Czech Saaz hops for a delightfully floral and spicy aroma. Lagered horizontally for two months for clarity of 
flavor. Light but with rich malt and hop character.',
        'https://www.noblebeastbeer.com/uploads/1/3/0/9/130995430/s493792787205224201_p191_i2_w1184.jpeg?width=640',
        true,
        15);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Evil Motives',
        7.2,
        68,
        'Double Dry Hopped IPA',
        'Double dry-hopped IPA, brewed with big hop additions of Citra, Simcoe, and Mosaic. Smooth bitterness, 
big aroma, and a clean finish.',
        'https://www.noblebeastbeer.com/uploads/1/3/0/9/130995430/s493792787205224201_p455_i2_w1184.jpeg?width=640',
        true,
        15);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Kapitan ',
        4.7,
        38,
        'Alt Bier',
        'Altbier is a copper colored German-style ale with a moderate hop character. A traditional 
decoction mash brings out rich malt flavors without sweetness and makes Kapit�n an easy drinker. A favorite 
of the Brewmaster!',
        'https://www.noblebeastbeer.com/uploads/1/3/0/9/130995430/s493792787205224201_p392_i1_w1184.jpeg?width=640',
        true,
        16);

-- Saucy Brew Works

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Love You, Bye',
        8.0,
        34,
        'Hazy Imperial IPA',
        'Super juicy and permanently hazy.',
        'https://www.saucybrewworks.com/media/images/Love_you_bye.width-400.png',
        true,
        16);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Juicy ASAP',
        6.5,
        66,
        'American India Pale Ale',
        'Tropical, citrusy, and most certainly juicy.',
        'https://www.saucybrewworks.com/media/images/Beer-Page_Core-Cans_IPA.width-400.png',
        true,
        17);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Habituale ',
        5.0,
        21,
        'K�lsch Style Golden Ale',
        'Light, clean, crisp with a slight citrusy, spicy character',
        'https://www.saucybrewworks.com/media/images/Beer-Page_Core-Cans_Habituale.width-400.png',
        true,
        17);

-- The Cleveland Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Muellerfest',
        5.4,
        68,
        'Oktoberfest Lager',
        'In honor of Ernst Mueller, who emigrated with his family to Cleveland and 
started the Cleveland Home Brewing Company, We give you our Oktoberfest at 5.4%. Full bodied lager 
using German Noble hops making this beer just plain delicious. PROST!',
        'no img',
        true,
        12);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Browns Town',
        5.4,
        45,
        'Brown Ale',
        'Sessionable Brown Ale with notes of chocolate and coffee. Finish is a little complex but 
balanced. Not too strong and to keeps you having more than just one.  ',
        'no img',
        true,
        12);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('AWFUGIT',
        11.0,
        35,
        'Triple IPA',
        'This super balanced, but boozy Triple IPA joins our menu when we all 
need to get tuned up fast: family holidays, big games, and bad weather. ',
        'no img',
        true,
        18);

-- The Jolly Scholar

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Give Me Good Dreams',
        10.1,
        18,
        'Fruit Beer',
        'This Belgian-style beer is bursting at its seams with 
raspberry and fruity and spicy yeast notes. Low bitterness and very high alcohol 
round out this red-hued ale',
        'https://untappd.akamaized.net/site/brewery_logos/brewery-338653_6b0c7.jpeg',
        true,
        13);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Remote Drinking',
        6.9,
        60,
        'American India Pale Ale',
        'A nice regular IPA with some bitterness and fruit/citrus. 
If you close your eyes and taste this, you are back at the Jolly Scholar for dollar 
beer night.',
        'https://untappd.akamaized.net/site/brewery_logos/brewery-338653_6b0c7.jpeg',
        true,
        13);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Tursas',
        7.7,
        26,
        'Baltic Porter',
        'A hefty Baltic Porter with lots of malt flavor and low roastiness 
and bitterness. Chocolate and dark fruit meld perfectly in this smooth lager.',
        'https://untappd.akamaized.net/site/brewery_logos/brewery-338653_6b0c7.jpeg',
        true,
        13);

-- Working Class Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Grinders Coffee Porter',
        6.3,
        31,
        'Coffee Porter',
        'Our Pipefitters Porter infused with fresh coffee from the 5 Points Coffee Co.',
        'no img',
        true,
        14);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Ploughman Pilsner',
        5.0,
        27,
        'Pilsner',
        'A German Style Pilsner, German Magnam and German Tettnanger Hops',
        'no img',
        true,
        14);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Wing Walker Wheat',
        5.0,
        12,
        'German Wheat Beer',
        'German style wheat beer with hints of clove and banana',
        'no img',
        true,
        14);

-- Maize Valley Craft Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Barrel of Monks',
        11.0,
        45,
        'Belgian Dark Strong Ale',
        'Our award winning Monk in Public that has been aged 9 
months in bourbon barrels.  This Belgian Dark Strong Ale is smooth and silky, 
the bourbon barrels impart a nice boozy component with a pleasant mouthfeel and 
lingering flavors.  At 11% ABV, this beer is perfect for sipping by the fire.',
        'https://www.maizevalley.com/wp-content/uploads/2020/10/00100trPORTRAIT_00100_BURST20201030141828926_COVER-225x300.jpg',
        true,
        15);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Azacca Smash Pale Ale',
        4.5,
        45,
        'Pale Ale',
        'Azacca Smash is a pale ale brewed with Vienna Malt and Azacca Hops.  
Light golden in color with tropical fruit aromas and flavors, this is an easy drinking 
pale ale.',
        'https://www.maizevalley.com/wp-content/uploads/2016/05/beer-tasting-event.jpg',
        true,
        15);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Hopnesia IPA',
        7.4,
        70,
        'K�lsch Style Golden Ale',
        'A bitter, floral and citrusy ale brewed with pale ale, light 
crystal and munich malts mashed a low temperature for good attenuation and a dry, crisp finish. 
Malts take a backseat in this style while hops are the star. This beer is brewed with Pale and 
Victory malts and hopped with Citra and Equinox hops. ',
        'https://www.maizevalley.com/wp-content/uploads/2019/01/Hopnesia-e1547862547510.jpg',
        true,
        15);

-- Fat Head's Brewery
 
INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Bumble Berry', 
        5.3, 
        13, 
        'Honey Blueberry Ale', 
        'Brewed with fresh harvested spring honey and infused with
fresh blueberries. A light, refreshing ale with a nice blueberry aroma, crackery malt
flavors, a hint of sweetness and a refreshing blueberry finish.', 
        'https://fatheads.com/images/fh_web_beerpage_feb2020_canglassphoto_bumbleberry-crop-u89116.png?crc=422555867',
        true,
        16);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Strange Magic',
        6.5,
        65,
        'IPA',
        'The magic is in our masterful combination of hops that create this ridiculously good India Pale Ale. 
The strange thing is how we get as much of it as we do into cans before we drink all of it ourselves.',
        'https://fatheads.com/images/fh_website_2019_beerandglassphoto_strange-crop-u1019524.png?crc=3917450316',
        true,
        16);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Sunshine Daydream',
        4.9,
        50,
        'Session IPA',
        'Award-Winning Session IPA with big hop aromas, flavors of citrus, peach, 
orange and tropical fruit with a nice light malt backbone. This is a very drinkable session ale. 
(Our fans call it an obsession.) Peace, Love & Hoppiness!',
        'https://fatheads.com/images/fh_web_beerpage_feb2020_canglassphoto_sunshinedaydream-crop-u89737.png?crc=3885080326',
        true,
        16);

-- Baithouse Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Portside Porter',
        5.6,
        24,
        'Porter',
        'This dark and delicious brew will delight the dark beer lover.  Stop in today to enjoy a frost glass today.',
        'https://baithousebrewery.com/wp-content/uploads/2019/07/Portside-Porter-600x321.jpg',
        true,
        17);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Tip-Up Ale',
        5.4,
        23,
        'American India Pale Ale',
        'This is a light blonde ale that was dry-hopped using Chinook hops 
from Ohio Hops, LLC located in Castalia, OH.  Come in and enjoy this delicious beer after a long 
day.  Come as you are!',
        'https://baithousebrewery.com/wp-content/uploads/2019/05/Tip-Up-Blonde-1-600x321.jpg',
        true,
        17);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('White Cap Ale',
        5.4,
        15,
        'Cream Ale',
        'This is a cream ale that is light and delightful and is reminiscent of the 
slight �rollers� one encounters while fishing on Lake Erie on a warm summer day.  Just as 
the movement of the boat enhances your fishing experience, so does this brew enliven your 
beer drinking experience.  The corn in this beer gives it a smooth finish and flavor similar 
to classic American beers, and will even out those �sea legs�.',
        'https://baithousebrewery.com/wp-content/uploads/2019/05/White-Cap-1-640x321.jpg',
        true,
        17);

-- Great Lakes Brewery

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Burning River Pale Ale',
        6.0,
        45,
        'Pale Ale',
        'Greetings from Cleveland! Where an infamous river fire rekindled appreciation for our 
region�s natural resources (like the malt and hops illuminating this Pale Ale).',
        'https://www.greatlakesbrewing.com/sites/default/files/burning-river-cans-fixed-580x960.jpg',
        true,
        18);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Dortmunder Gold Lager',
        5.8,
        30,
        'Lager',
        'A classic award-winning balance of sweet malt and dry hop flavors, proudly waving 
the flag for Cleveland and refreshing beer drinkers everywhere since 1988.',
        'https://www.greatlakesbrewing.com/sites/default/files/dort-2020-fixed.png',
        true,
        18);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Siren Shores',
        6.9,
        15,
        'Passion Fruit Saison',
        'Ahoy, weary sailor! Heed the call of the North Coast�s
 �inland seas� and plunge into an effervescent maelstrom of sweet passion fruit, 
 zesty spices, and tempting tropical fruit aromas.',
        'https://www.greatlakesbrewing.com/sites/default/files/siren-shores.png',
        false,
        18);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Edmund Fitzgerald',
        6.0,
        37,
        'Porter',
        'Robust and complex, our Porter is a bittersweet tribute to the
 legendary freighter�s fallen crew�taken too soon when the gales of November came early.',
        'https://www.greatlakesbrewing.com/sites/default/files/edfitz-fixed_1.png',
        true,
        18);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Commodore Perry',
        7.7,
        70,
        'IPA',
        'What�s this? A British-style IPA named after the man who defeated 
His Majesty�s Royal Navy in the War of 1812? Consider this a bold, hoppy 
(and mildly ironic) plunder of war.',
        'https://www.greatlakesbrewing.com/sites/default/files/commodore-fixed-2020.jpg',
        true,
        18);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Eliot Ness',
        6.1,
        27,
        'Amber Lager',
        'Almost untouchably smooth--armed with lightly toasted malts and noble hops.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511645068/eliotness_beer_yx7iv4.png',
        true,
        18);

------ Masthead ------

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Original Lager',
        5.2,
        68,
        'German Lager',
        'A traditional full flavored German Lager with a crisp finish. The bier Hofbrauhaus has been famous for since 1589.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511649200/hofbrau_lager_puc_h8or43.jpg',
        true,
        19);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Hefeweizen',
        5.4,
        55,
        'Hefeweizen',
        'A specialty born in Munich – loved by the world. A fairly sweet old-style Wheat bier brewed to create a wonderful combination banana and clove flavor and aroma.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511649351/hofbrau_heffwiz_pic_uz7nlz.jpg',
        true,
        19);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('Dunkel',
        5.5,
        75,
        'Dunkel',
        'For centuries Munich’s favorite bier. Dunkel translates to “Dark�? lager. It is medium bodied, easy to drink, with simple roasted malt flavor and slight caramel undertones.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511649546/Hofbrauhaus_dunkel_pic_w5bxhw.jpg',
        true,
        19);

--- Platform ---

INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('CITRAMAX IPA',
        6.7,
        80,
        'IPA',
        'A West Coast style IPA dry-hopped with organic Citra hops to impart intense tropical and citrus fruit aromas. This brew has an aggressive, boldly-bright American hop character that will leave you craving another.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511650026/market_citramax_beer_pic_mh7psh.png',
        true,
        20);


INSERT INTO beers (name, abv, ibu, type, info, img_url, is_active, brewery_id)
VALUES ('PROSPERITY WHEAT',
        6.0,
        68,
        'Wheat',
        'Formerly known as ***** Street Wheat! If you’ve ever spent time in a German Beer Garden, you know how much they love their wheat beer.  Our Bavarian style Hefeweizen is a satisfying blend of sweet wheat and pale malts, clove and banana aromatics, and the zesty tang of wheat beer yeast.',
        'http://res.cloudinary.com/teclebrew/image/upload/v1511650039/market_prosperity_ber_pic_efdril.png',
        true,
        20);


COMMIT;