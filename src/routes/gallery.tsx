import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageTitle, GallerySection, Values, Testimonials, FinalCTA } from '@/components/caffein/site';
export const Route = createFileRoute('/gallery')({
 head: () => ({meta:[{title:'In Focus — Caffein Gallery'},{name:'description',content:'A glimpse of Caffein: sunlit corners, carefully crafted coffee and freshly baked favourites.'},{property:'og:title',content:'In Focus — Caffein Gallery'},{property:'og:description',content:'A glimpse of Caffein: sunlit corners, carefully crafted coffee and freshly baked favourites.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <SiteLayout><PageTitle label="CAFFEIN — GALLERY" title={'Life, in little'} italic={'moments.'} description={'A glimpse of the everyday. A collection of our favourite things.'}/><GallerySection full/><FinalCTA/></SiteLayout>;}
