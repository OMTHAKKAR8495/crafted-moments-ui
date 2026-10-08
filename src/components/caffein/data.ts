import interior from '@/assets/cafe-interior.jpg';
import coffee from '@/assets/coffee.jpg';
import pastries from '@/assets/pastries.jpg';
import exterior from '@/assets/cafe-exterior.jpg';
export const images = { interior, coffee, pastries, exterior };
export const nav = [['Home', '/'], ['About', '/about'], ['Menu', '/menu'], ['Experience', '/experience'], ['Gallery', '/gallery'], ['Contact', '/contact']] as const;
export const menu = {
  Coffee: [ ['Espresso', 'A small ritual. Rich, balanced, beautifully bold.', '180'], ['Flat White', 'Double espresso, silky milk, a little everyday magic.', '240'], ['Cappuccino', 'Our house blend beneath a cloud of microfoam.', '240'], ['Slow Brew', 'Single-origin coffee. Patiently poured, worth the wait.', '280'] ],
  'Signature Drinks': [ ['Honey & Oat Latte', 'Espresso, oat milk and a touch of wildflower honey.', '310'], ['Orange Espresso Tonic', 'Bright citrus, espresso and sparkling tonic.', '340'], ['Pistachio Cloud', 'Pistachio cream, espresso and a silky milk finish.', '360'], ['Vanilla Cold Brew', 'Steeped slowly, served over ice with real vanilla.', '310'] ],
  Desserts: [ ['Butter Croissant', 'Golden layers, cultured butter, baked each morning.', '210'], ['Pistachio Croissant', 'Flaky pastry filled with smooth pistachio cream.', '320'], ['Carrot & Walnut Cake', 'A generous slice with cream cheese frosting.', '340'], ['Chocolate Cookie', 'Dark chocolate, sea salt and a soft centre.', '190'] ],
  Food: [ ['Avocado on Toast', 'Sourdough, avocado, lemon and a little chilli.', '420'], ['Burrata & Tomatoes', 'Creamy burrata, seasonal tomatoes and basil.', '480'], ['The Breakfast Plate', 'Soft eggs, sourdough and seasonal greens.', '460'], ['Seasonal Sandwich', 'Freshly filled. Ask us what is good today.', '380'] ],
};
export const gallery = [
  {src: interior, alt: 'Sunlight falling across our café', className: 'gallery-wide'},
  {src: coffee, alt: 'Two beautifully poured flat whites', className: 'gallery-tall'},
  {src: pastries, alt: 'Fresh pastries and pistachio cake', className: ''},
  {src: exterior, alt: 'A quiet morning on the café terrace', className: ''},
  {src: interior, alt: 'The walnut counter and espresso bar', className: 'gallery-tall crop-right'},
  {src: pastries, alt: 'Golden croissant, fresh from the oven', className: 'crop-bottom'},
  {src: coffee, alt: 'The details of your daily ritual', className: 'crop-top'},
  {src: exterior, alt: 'Your favourite corner of the neighbourhood', className: 'gallery-wide crop-top'},
];
