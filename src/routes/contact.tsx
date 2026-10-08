import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageTitle, Visit, Values, Testimonials, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/contact')({
 head: () => ({meta:[{title:'Visit Us — Caffein'},{name:'description',content:'Find your way to Caffein. Discover our café, opening hours and a place to make yourself at home.'},{property:'og:title',content:'Visit Us — Caffein'},{property:'og:description',content:'Find your way to Caffein. Discover our café, opening hours and a place to make yourself at home.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <SiteLayout><PageTitle label="CAFFEIN — CONTACT" title={'Your next coffee'} italic={'is waiting.'} description={'A warm welcome. A quiet corner. We saved you a seat.'}/><Visit full/><FinalCTA/></SiteLayout>;}
