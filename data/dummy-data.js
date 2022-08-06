import Category from '../models/category'
import Meal from '../models/meals'


export const CATEGORIES=[
    new Category('c1','Italian','#f5328d'),
    new Category('c2','Quick & Easy','#f54242'),
    new Category('c3','Hamburgers','#f5a442'),
    new Category('c4','German','#f5d142'),
    new Category('c5','Light & Lovely','#368dff'),
    new Category('c6','Exotic','#41d95d'),
    new Category('c7','Breakfast','#b9ffb0'),
    new Category('c8','AAA','#ffffa0'),
]

export const MEALS=[
    new Meal(
        'm1',
        ['c1','c2'],
        "Spaghetti with Tomato Sauce",
        "affordable",
        'https://images.unsplash.com/photo-1659546441361-f3991890bd96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        20,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            "250g Spaghetti",
            'Spices',
            'Cheese (optional)',

        ],
        [
            'Form 2 patties',
            'Fry the patties for c.4 minutes on each side',
            'Quickly fry the buns for c. 1 minute on each side',
        ],
        false,
        false,
        false,
        true,
    )  ,
    new Meal(
        'm2',
        ['c2','c3','c5'],
        "Spaghetti with Tomato Sauce",
        "affordable",
        'https://images.unsplash.com/photo-1528441026149-213b6a37d3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
        20,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            "250g Spaghetti",
            'Spices',
            'Cheese (optional)',

        ],
        [
            'Form 2 patties',
            'Fry the patties for c.4 minutes on each side',
            'Quickly fry the buns for c. 1 minute on each side',
        ],
        false,
        false,
        false,
        true,
    ) ,
    new Meal(
        'm3',
        ['c4','c6','c7','c8'],
        "Spaghetti with Tomato Sauce",
        "affordable",
        'https://images.unsplash.com/photo-1531120303686-d0a614615266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        20,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            "250g Spaghetti",
            'Spices',
            'Cheese (optional)',

        ],
        [
            'Form 2 patties',
            'Fry the patties for c.4 minutes on each side',
            'Quickly fry the buns for c. 1 minute on each side',
        ],
        false,
        false,
        false,
        true,
    )  
]