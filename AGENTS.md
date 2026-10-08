<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Caffein experience frontend-only with static data and bundled image imports; this site is a visual marketing UI, not an operational service.
- Share reusable site sections in src/components/caffein and use distinct content routes with leaf metadata; this keeps home previews and dedicated pages visually consistent.
- Use CSS animations with IntersectionObserver for reveals and reduced-motion overrides; this provides editorial motion without an animation dependency.
