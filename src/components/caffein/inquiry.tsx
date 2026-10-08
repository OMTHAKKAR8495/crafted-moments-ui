import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from './site';

export const inquiryTopics = ['A general question', 'Private events & celebrations', 'Catering & orders', 'Feedback', 'Careers', 'Something else'] as const;
export const MAX_MESSAGE = 1000;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, 'Please tell us your name.').max(100, 'Please keep your name under 100 characters.'),
  email: z.string().trim().min(1, 'We need an email so we can reply.').email('That email doesn’t look quite right.').max(255, 'That email is too long.'),
  topic: z.string().refine(value => (inquiryTopics as readonly string[]).includes(value), { message: 'Please choose what your note is about.' }),
  message: z.string().trim().min(10, 'A few more words, please — at least 10 characters.').max(MAX_MESSAGE, `Please keep your note under ${MAX_MESSAGE} characters.`),
  updates: z.boolean(),
});
type InquiryValues = z.infer<typeof inquirySchema>;

export function Inquiry() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<InquiryValues | null>(null);
  const timer = useRef<number>();
  const sentRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: '', email: '', topic: '', message: '', updates: false },
    mode: 'onBlur',
  });

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => { if (sent) sentRef.current?.focus(); }, [sent]);

  const messageLength = (watch('message') ?? '').length;
  const send = async (values: InquiryValues) => {
    setSending(true);
    await new Promise<void>(resolve => { timer.current = window.setTimeout(resolve, 850); });
    setSending(false);
    setSent(values);
  };

  return <section className="section inquiry-section" aria-labelledby="inquiry-title">
    <Reveal className="inquiry-grid">
      <div className="inquiry-intro">
        <p className="eyebrow">06 — SAY HELLO</p>
        <h2 id="inquiry-title">Send us a<br/><em>note.</em></h2>
        <p className="inquiry-copy">A question about the menu, a celebration to plan, or simply a hello. Tell us what’s on your mind and we’ll write back.</p>
        <p className="inquiry-assurance">WE USUALLY REPLY WITHIN A DAY</p>
      </div>
      {sent ? <div className="inquiry-sent" ref={sentRef} tabIndex={-1} role="status">
        <span className="inquiry-mark" aria-hidden="true"><Check size={20}/></span>
        <h3>Thank you, {sent.name.split(' ')[0]}.</h3>
        <p>Your note is with us. We’ll reply to <strong>{sent.email}</strong> within a day — usually a good deal sooner.</p>
        <Button variant="ghost" className="inquiry-again" onClick={() => { reset(); setSent(null); }}>Send another note <ArrowUpRight size={15}/></Button>
      </div> : <form className="inquiry-form" onSubmit={handleSubmit(send)} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="inquiry-name">Your name</label>
            <input id="inquiry-name" {...register('name')} placeholder="Jamie Rivera" autoComplete="name" maxLength={120} aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? 'inquiry-name-error' : undefined}/>
            {errors.name && <p className="field-error" id="inquiry-name-error" role="alert">{errors.name.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="inquiry-email">Email</label>
            <input id="inquiry-email" type="email" {...register('email')} placeholder="you@example.com" autoComplete="email" maxLength={300} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'inquiry-email-error' : undefined}/>
            {errors.email && <p className="field-error" id="inquiry-email-error" role="alert">{errors.email.message}</p>}
          </div>
        </div>
        <div className="field">
          <label htmlFor="inquiry-topic">What’s it about?</label>
          <select id="inquiry-topic" {...register('topic')} aria-invalid={errors.topic ? true : undefined} aria-describedby={errors.topic ? 'inquiry-topic-error' : undefined}>
            <option value="">Choose one…</option>
            {inquiryTopics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
          </select>
          {errors.topic && <p className="field-error" id="inquiry-topic-error" role="alert">{errors.topic.message}</p>}
        </div>
        <div className="field">
          <div className="field-top">
            <label htmlFor="inquiry-message">Your note</label>
            <span className="char-count">{messageLength} / {MAX_MESSAGE}</span>
          </div>
          <textarea id="inquiry-message" rows={5} {...register('message')} placeholder="Tell us a little about it…" maxLength={MAX_MESSAGE} aria-invalid={errors.message ? true : undefined} aria-describedby={errors.message ? 'inquiry-message-error' : undefined}/>
          {errors.message && <p className="field-error" id="inquiry-message-error" role="alert">{errors.message.message}</p>}
        </div>
        <label className="consent" htmlFor="inquiry-updates">
          <input id="inquiry-updates" type="checkbox" {...register('updates')}/>
          <span>Send me the occasional note about seasonal menus and events.</span>
        </label>
        <Button type="submit" className="inquiry-submit" disabled={sending}>{sending ? 'Sending…' : 'Send my note'} <ArrowUpRight/></Button>
        <p className="inquiry-disclaimer">DEMO FORM — YOUR NOTE STAYS IN YOUR BROWSER AND ISN’T SENT ANYWHERE.</p>
      </form>}
    </Reveal>
  </section>;
}
