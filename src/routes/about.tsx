import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageTitle, Story, Values, Testimonials, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/about')({
 head: () => ({meta:[{title:'Our Story — Caffein'},{name:'description',content:'A little about us. A lot about the things we love.'},{property:'og:title',content:'Our Story — Caffein'},{property:'og:description',content:'A little about us. A lot about the things we love.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <SiteLayout><PageTitle label="CAFFEIN — ABOUT" title={'Our story.'} italic={'Your ritual.'} description={'Coffee is where it starts. The feeling of belonging is why we stay.'}/><Story full/><Values/><FinalCTA/></SiteLayout>;}
