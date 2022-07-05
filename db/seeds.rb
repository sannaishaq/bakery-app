BakedItem.destroy_all
Review.destroy_all

puts "Seeding baked items..."

item1 = BakedItem.create(item_type:'customcakes', event_type: 'Bridal Shower', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1652195618/Cakes/IMG-0687_uuy79y.jpg')
item2 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1652704604/Cakes/IMG-2841_kkro8l.jpg')
item3 = BakedItem.create(item_type:'customcakes', event_type: 'Wedding', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651762861/Cakes/IMG-4748_sg9zsz.jpg')
item3 = BakedItem.create(item_type:'customcakes', event_type: 'Graduation', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502456/Cakes/IMG_6114_fnkv2z.jpg')
item4 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1652195578/Cakes/IMG-3133_aoagx5.jpg')
item4 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653503821/Cakes/IMG_7853_oct9sx.jpg')
item5 = BakedItem.create(item_type:'customcakes', event_type: 'Holiday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651764245/Cakes/IMG_7505_foc1q9.jpg')
item6 = BakedItem.create(item_type:'customcakes', event_type: 'Wedding', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651762861/Cakes/IMG-4748_sg9zsz.jpg')
item7 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651762881/Cakes/IMG-3821_vabqtb.jpg')
item9 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651764308/Cakes/IMG_7508_xsbgit.jpg')
item10 = BakedItem.create(item_type:'customcakes', event_type: 'Birthday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653261414/Cakes/IMG_7960_drtkg8.jpg')
item11 = BakedItem.create(item_type:'cupcakes', event_type: 'Holiday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763069/Cakes/IMG-5065_azjbyr.jpg')
item11 = BakedItem.create(item_type:'cupcakes', event_type: 'Holiday', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1654030449/Cakes/IMG_7806_i0n3u0.jpg')
item21 = BakedItem.create(item_type:'treatboxes', event_type: 'Valentine', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651762927/Cakes/IMG-4137_odqgh7.jpg')
item23 = BakedItem.create(item_type:'treatboxes', event_type: 'Valentine', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763023/Cakes/IMG-0451_waiyyn.jpg')
item24 = BakedItem.create(item_type:'treatboxes', event_type: 'Bridal Shower', image_url: 'https://res.cloudinary.com/djbbs3mk3/image/upload/v1653580396/Cakes/IMG_2593_vq4i1w_lwmrdp.jpg')


puts "Seeding reviews..."
review1 = Review.create(description: 'Such a wonderful experience', name_of_reviewer: 'Sakinah')
