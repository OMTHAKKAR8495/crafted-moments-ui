import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { 
  Coffee, 
  DollarSign, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  Filter, 
  Search, 
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Sparkles,
  Lock,
  User,
  KeyRound,
  LogOut
} from 'lucide-react';
import { SiteLayout, PageTitle, Reveal, Brand } from '@/components/caffein/site';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/admin')({
  head: () => ({
    meta: [
      { title: 'Admin Portal — Caffein' },
      { name: 'description', content: 'Secure Caffein management portal and inquiry inbox.' },
      { property: 'og:title', content: 'Admin Portal — Caffein' },
      { property: 'og:description', content: 'Secure Caffein management portal and inquiry inbox.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: AdminPage,
});

type InquiryItem = {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  time: string;
  status: 'new' | 'replied' | 'archived';
  date: string;
};

const initialInquiries: InquiryItem[] = [
  {
    id: 'INQ-1042',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    topic: 'Private events & celebrations',
    message: 'We are planning a small team brunch for 14 people next Friday around 10:30 AM. Could we reserve the corner terrace section?',
    time: '15 mins ago',
    date: 'Today',
    status: 'new',
  },
  {
    id: 'INQ-1041',
    name: 'Priya Iyer',
    email: 'priya.iyer@example.com',
    topic: 'Catering & orders',
    message: 'Looking to order 25 Pistachio Croissants and a cold brew dispenser for an art gallery launch this weekend.',
    time: '2 hours ago',
    date: 'Today',
    status: 'new',
  },
  {
    id: 'INQ-1040',
    name: 'Rohan Mehta',
    email: 'rohan.m@example.com',
    topic: 'A general question',
    message: 'Do you offer whole bean retail bags for the Ethiopian single-origin roast served in slow brew?',
    time: 'Yesterday',
    date: 'Yesterday',
    status: 'replied',
  },
  {
    id: 'INQ-1039',
    name: 'Ananya Verma',
    email: 'ananya.v@example.com',
    topic: 'Careers',
    message: 'Senior barista with 4 years specialty coffee experience. Would love to know if you are expanding the morning crew.',
    time: '2 days ago',
    date: 'Oct 6',
    status: 'replied',
  },
  {
    id: 'INQ-1038',
    name: 'Kabir Das',
    email: 'kabir.das@example.com',
    topic: 'Feedback',
    message: 'The Orange Espresso Tonic was exceptional today! Will definitely bring friends this weekend.',
    time: '3 days ago',
    date: 'Oct 5',
    status: 'archived',
  },
];

const DEFAULT_USER = 'admin';
const DEFAULT_PASS = 'caffein123';

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('caffein123');
  const [authError, setAuthError] = useState('');
  
  const [inquiries, setInquiries] = useState<InquiryItem[]>(initialInquiries);
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(initialInquiries[0] ?? null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('caffein_admin_auth');
      if (stored === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === DEFAULT_USER && password === DEFAULT_PASS) {
      setIsAuthenticated(true);
      setAuthError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('caffein_admin_auth', 'true');
      }
    } else {
      setAuthError('Invalid credentials. Use Username: admin and Password: caffein123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('caffein_admin_auth');
    }
  };

  const filtered = inquiries.filter(item => {
    const matchesTopic = filterTopic === 'all' || item.topic === filterTopic;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const toggleStatus = (id: string) => {
    setInquiries(prev => prev.map(item => {
      if (item.id !== id) return item;
      const nextStatus = item.status === 'new' ? 'replied' : item.status === 'replied' ? 'archived' : 'new';
      return { ...item, status: nextStatus };
    }));
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(curr => curr ? { ...curr, status: curr.status === 'new' ? 'replied' : curr.status === 'replied' ? 'archived' : 'new' } : null);
    }
  };

  if (!isAuthenticated) {
    return (
      <SiteLayout>
        <PageTitle 
          label="MANAGEMENT CONSOLE" 
          title="Admin" 
          italic="Sign In." 
          description="Enter your administrator credentials to access the cafe dashboard and inquiry inbox."
        />

        <section className="section admin-login-section">
          <Reveal className="admin-login-card">
            <div className="login-header">
              <div className="login-icon-badge">
                <Lock size={20} />
              </div>
              <h2>Management Access</h2>
              <p>Please enter the staff credentials to proceed.</p>
            </div>

            <div className="demo-credentials-banner">
              <span className="eyebrow">PRE-FILLED DEMO CREDENTIALS</span>
              <div className="demo-creds-details">
                <p><strong>Username:</strong> <code>admin</code></p>
                <p><strong>Password:</strong> <code>caffein123</code></p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="field">
                <label htmlFor="admin-user">Username / ID</label>
                <div className="input-with-icon">
                  <User size={15} />
                  <input 
                    id="admin-user"
                    type="text" 
                    value={username}
                    onChange={e => { setUsername(e.target.value); setAuthError(''); }}
                    placeholder="admin"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="admin-pass">Password</label>
                <div className="input-with-icon">
                  <KeyRound size={15} />
                  <input 
                    id="admin-pass"
                    type="password" 
                    value={password}
                    onChange={e => { setPassword(e.target.value); setAuthError(''); }}
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              {authError && (
                <p className="field-error" role="alert">{authError}</p>
              )}

              <Button type="submit" className="inquiry-submit login-submit-btn">
                Open Admin Dashboard <ArrowUpRight size={15} />
              </Button>
            </form>
          </Reveal>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="section page-title admin-page-title">
        <p className="eyebrow">CAFFEIN — MANAGEMENT CONSOLE</p>
        <h1>Admin <em>Dashboard.</em></h1>
        <p>Overview of cafe metrics, live visitor inquiries, and daily cafe operations.</p>
        <div className="admin-session-controls">
          <div className="admin-user-tag">
            <span className="user-dot" />
            <span>Logged in as <strong>admin</strong></span>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="logout-btn">
            Sign out <LogOut size={14} />
          </Button>
        </div>
      </section>

      <section className="section admin-section">
        {/* KPI Stats Row */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-icon-wrapper">
              <MessageSquare size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-label">NEW INQUIRIES</span>
              <p className="stat-number">
                {inquiries.filter(i => i.status === 'new').length} 
                <span className="stat-badge">+2 today</span>
              </p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon-wrapper">
              <Coffee size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-label">CUPS POURED (TODAY)</span>
              <p className="stat-number">
                348
                <span className="stat-badge highlight">94% target</span>
              </p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon-wrapper">
              <DollarSign size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-label">TODAY'S REVENUE</span>
              <p className="stat-number">
                ₹84,250
                <span className="stat-badge">+12% vs last week</span>
              </p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="stat-icon-wrapper">
              <Users size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-label">SEATED GUESTS</span>
              <p className="stat-number">
                42
                <span className="stat-badge">8 tables open</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Workspace */}
        <div className="admin-workspace-grid">
          {/* Left Column: Inbox List */}
          <div className="admin-inbox-container">
            <div className="inbox-header">
              <div>
                <h2>Inquiry Inbox</h2>
                <p>Messages submitted through the public inquiry form</p>
              </div>
              <span className="inbox-count">{filtered.length} notes</span>
            </div>

            {/* Filter and Search Bar */}
            <div className="inbox-toolbar">
              <div className="inbox-search">
                <Search size={15} />
                <input 
                  type="text" 
                  placeholder="Search sender, email, keywords..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="inbox-filters">
                <select 
                  value={filterTopic} 
                  onChange={e => setFilterTopic(e.target.value)}
                  aria-label="Filter inquiries by topic"
                >
                  <option value="all">All Topics</option>
                  <option value="Private events & celebrations">Private Events</option>
                  <option value="Catering & orders">Catering</option>
                  <option value="A general question">General Questions</option>
                  <option value="Careers">Careers</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
            </div>

            {/* List */}
            <div className="inbox-list">
              {filtered.length === 0 ? (
                <div className="inbox-empty">
                  <p>No inquiries found matching your filter.</p>
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`inbox-item ${selectedInquiry?.id === item.id ? 'active' : ''} status-${item.status}`}
                    onClick={() => setSelectedInquiry(item)}
                  >
                    <div className="inbox-item-top">
                      <div className="inbox-item-title">
                        <span className={`status-pill ${item.status}`}>
                          {item.status}
                        </span>
                        <h3>{item.name}</h3>
                      </div>
                      <span className="inbox-time">{item.time}</span>
                    </div>
                    <p className="inbox-topic">{item.topic}</p>
                    <p className="inbox-preview">{item.message}</p>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Selected Detail & Operations */}
          <div className="admin-detail-container">
            {selectedInquiry ? (
              <div className="inquiry-detail-card">
                <div className="detail-header">
                  <div>
                    <span className="eyebrow">{selectedInquiry.id} • {selectedInquiry.date}</span>
                    <h2>{selectedInquiry.name}</h2>
                    <a href={`mailto:${selectedInquiry.email}`} className="detail-email">
                      {selectedInquiry.email} <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <Button 
                    variant="outline"
                    className={`status-toggle-btn ${selectedInquiry.status}`}
                    onClick={() => toggleStatus(selectedInquiry.id)}
                  >
                    Mark as {selectedInquiry.status === 'new' ? 'Replied' : selectedInquiry.status === 'replied' ? 'Archived' : 'New'}
                  </Button>
                </div>

                <div className="detail-topic-banner">
                  <span>TOPIC</span>
                  <strong>{selectedInquiry.topic}</strong>
                </div>

                <div className="detail-body">
                  <h3>Customer Note</h3>
                  <p className="detail-message-text">{selectedInquiry.message}</p>
                </div>

                <div className="detail-actions">
                  <Button asChild className="inquiry-submit">
                    <a href={`mailto:${selectedInquiry.email}?subject=Re: Your note to Caffein (${selectedInquiry.topic})`}>
                      Reply via Email <ArrowUpRight size={15} />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="detail-archive"
                    onClick={() => toggleStatus(selectedInquiry.id)}
                  >
                    {selectedInquiry.status === 'archived' ? 'Unarchive note' : 'Archive note'}
                  </Button>
                </div>

                <div className="detail-quick-notes">
                  <h4>Internal Note</h4>
                  <textarea 
                    placeholder="Add an internal staff note for this reservation or request..." 
                    rows={3}
                  />
                </div>
              </div>
            ) : (
              <div className="no-selection">
                <p>Select an inquiry from the inbox to view details and reply.</p>
              </div>
            )}

            {/* Quick Actions / Cafe Controls */}
            <div className="admin-quick-controls">
              <div className="control-heading">
                <span className="eyebrow">QUICK ACTIONS</span>
                <h3>Cafe Operations</h3>
              </div>
              <div className="controls-grid">
                <div className="control-item">
                  <span>Seasonal Blend Special</span>
                  <span className="control-status active">Active on menu</span>
                </div>
                <div className="control-item">
                  <span>Terrace Seating</span>
                  <span className="control-status open">Open (Good Weather)</span>
                </div>
                <div className="control-item">
                  <span>Inquiry Notifications</span>
                  <span className="control-status on">SMS & Email alerts active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
