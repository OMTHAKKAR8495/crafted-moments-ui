import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageTitle, Experience, Values, Testimonials, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/experience')({
 head: () => ({meta:[{title:'The Experience — Caffein'},{name:'description',content:'Find your corner at Caffein. Thoughtful spaces, familiar faces and moments worth slowing down for.'},{property:'og:title',content:'The Experience — Caffein'},{property:'og:description',content:'Find your corner at Caffein. Thoughtful spaces, familiar faces and moments worth slowing down for.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <SiteLayout><PageTitle label="CAFFEIN — EXPERIENCE" title={'Your pause.'} italic={'Your place.'} description={'Good coffee is only the beginning. Make yourself at home.'}/><Experience full/><Values/><Testimonials/><FinalCTA/></SiteLayout>;}
