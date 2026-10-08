import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, Hero, RitualBand, Story, Experience, MenuSection, GallerySection, Values, Testimonials, Visit, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/')({
 head: () => ({meta:[{title:'Caffein — Coffee, Crafted With Character'},{name:'description',content:'Thoughtfully sourced coffee, freshly baked favourites, and a place to slow down. Welcome to Caffein.'},{property:'og:title',content:'Caffein — Coffee, Crafted With Character'},{property:'og:description',content:'Your daily ritual, reimagined. Discover thoughtful coffee and a warm welcome at Caffein.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Home,
});
function Home(){return <SiteLayout><Hero/><RitualBand/><Story/><Experience/><MenuSection/><GallerySection/><Values/><Testimonials/><Visit/><FinalCTA/></SiteLayout>;}
