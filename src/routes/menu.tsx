import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageTitle, MenuSection, Values, Testimonials, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/menu')({
 head: () => ({meta:[{title:'The Menu — Caffein'},{name:'description',content:'Explore specialty coffee, signature drinks, fresh pastries and honest food at Caffein.'},{property:'og:title',content:'The Menu — Caffein'},{property:'og:description',content:'Explore specialty coffee, signature drinks, fresh pastries and honest food at Caffein.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <SiteLayout><PageTitle label="CAFFEIN — MENU" title={'Made with care.'} italic={'Served with love.'} description={'A little something for your morning, your afternoon, and every moment in between.'}/><MenuSection full/><FinalCTA/></SiteLayout>;}
