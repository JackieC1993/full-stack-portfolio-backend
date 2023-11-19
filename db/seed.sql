\c dimsums_dev

INSERT INTO dimsums(name, price, ingredient, description, quantity, savory,size)
VALUES
('Shumai', 7.00, 'dumplings that have a thin wrapper made of flour and hot water', ' filling of minced pork, shrimp, mushrooms', 4, true,'medium'),
('Har Gow', 5.49, 'steamed dumpling made up of marinated shrimp filling', 'traditional Cantonese dish and it was created by a chef from the Yizhen Teahouse in China', 4, true, 'medium'),
('Xiao long bao:soup dumplings', 6.00 , 'due to its plump sack-like shape, which holds juicy minced pork and melted jelly stock.','Soup spoon filled with ginger slices and vinegar to season',9, true, 'medium'),
('Cheung Fun', 8.10, 'thin rice noodles wrapped around various fillings, like char siu or shrimp', 'Cheung fun has origins in Guangdong province and Hong Kong.', 6, true, 'small'),
('Char siu bao', 7.00, 'soft and fluffy steamed dough made of flour, starch, sugar, and sometimes milk and a sweet and savory stewed pork filling', ' bbq pork bun', 4, true, 'medium' ),
('Gailan Chinese broccoli', 6.50,'fresh steamed vegetable that is also known as Chinese broccoli', 'created by the founder of Lee Kum Kee in Hong Kong in the late 1800s', 10, true, 'medium'), 
('Lo Mai gai steamed sticky rice', 8.00, 'sticky rice filled with various ingredients of meat, savory seasonings soy sauce and oyster sauce ginger green onions','lotus leaf packets are very filling for a dim sum dish', 8, true, 'large'),
('Egg Tart', 6.90, 'egg custard filling and super flaky, shortbread-like crust.', 'super popular sweet and savory dessert', 4, false, 'small'),
('Bo lo bao', 7.50,  ' thick and crispy crust topping over a sweet egg-dough and filled with a silky custard center', 'popular in Hong Kong that it officially labeled as part of the city cultural heritage', 5, false, 'small'),
('shrimp lollipops', 10.00, 'made from a de-shelled crab claw or minced shrimp that coated in a breading layer, and deep-fried', 'The claw and the sugarcane are used as “lollipop” holders and can be dipped into soy sauce', 9, true, 'large');

INSERT INTO reviews (reviewer,content,rating,dimsums_id)
VALUES

('John Cena', 'This food is on fire!', 5, 1 ),
('Natalya Nedihart', 'I will recommend this food to my friend', 5, 2),
('Carmella Staten ', 'This food is pretty lit' , 4, 3),
('Bart Gunn', 'Not my vibe eating here, too greasy' ,2, 4),
('Jay White', 'Bloody hell my food is not great' 2, 5),
('MJF', 'New York loves diversity like DimSums', 5, 6)