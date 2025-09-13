import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/use-language';
import { t } from 'i18next';

const App = () => {
    const { appearance, updateAppearance } = useAppearance();
    const { language, setLanguage } = useLanguage();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300`}>
            <div className="bg-surface min-h-screen">
                {/* Header with Theme Toggle */}
                <header className="bg-surface-elevated border-b border-light p-6">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <h1 className="text-primary text-3xl font-bold">{t('Manage all employees')}</h1>
                        <div className='flex justify-between items-center gap-4'>
                            <div className={cn('inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800')}>
                                {tabs.map(({ value, icon: Icon, label }) => (
                                    <button
                                        key={value}
                                        onClick={() => updateAppearance(value)}
                                        className={cn(
                                            'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                                            appearance === value
                                                ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                                                : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                                        )}
                                    >
                                        <Icon className="-ml-1 h-4 w-4" />
                                        <span className="ml-1.5 text-sm">{label}</span>
                                    </button>
                                ))}
                            </div>
                            <div>
                                <button onClick={() => {setLanguage()}} className="btn-primary">
                                    {language === 'en' ? 'English' : 'العربية'}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto p-6 space-y-8">

                    {/* Cards Section */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Cards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card">
                                <h3 className="text-primary font-semibold mb-2">Default Card</h3>
                                <p className="text-secondary mb-4">This is a standard card with default styling and shadow.</p>
                                <button className="btn-primary">Action</button>
                            </div>

                            <div className="card-elevated">
                                <h3 className="text-primary font-semibold mb-2">Elevated Card</h3>
                                <p className="text-secondary mb-4">This card has elevated styling with more shadow.</p>
                                <button className="btn-secondary">Secondary</button>
                            </div>

                            <div className="card-subtle">
                                <h3 className="text-primary font-semibold mb-2">Subtle Card</h3>
                                <p className="text-secondary mb-4">This card has subtle styling without borders.</p>
                                <button className="btn-ghost">Ghost</button>
                            </div>
                        </div>
                    </section>

                    {/* Buttons Section */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Buttons</h2>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn-primary">Primary Button</button>
                            <button className="btn-secondary">Secondary Button</button>
                            <button className="btn-ghost">Ghost Button</button>
                            <button className="btn-primary" disabled>Disabled Primary</button>
                        </div>
                    </section>

                    {/* Typography Section */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Typography</h2>
                        <div className="card space-y-3">
                            <h1 className="text-primary text-4xl font-bold">Heading 1 - Primary Text</h1>
                            <h2 className="text-primary text-3xl font-semibold">Heading 2 - Primary Text</h2>
                            <h3 className="text-primary text-2xl font-medium">Heading 3 - Primary Text</h3>
                            <p className="text-primary text-lg">Large paragraph text - Primary</p>
                            <p className="text-secondary">Regular paragraph text - Secondary</p>
                            <p className="text-tertiary">Tertiary text for less important content</p>
                            <p className="text-muted">Muted text for hints and disabled states</p>
                            <p className="text-accent">Accent text for highlights and links</p>
                        </div>
                    </section>

                    {/* Form Elements */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Form Elements</h2>
                        <div className="card space-y-4">
                            <div>
                                <label className="block text-primary font-medium mb-2">Regular Input</label>
                                <input className="input w-full" placeholder="Enter some text..." />
                            </div>

                            <div>
                                <label className="block text-primary font-medium mb-2">Error Input</label>
                                <input className="input input-error w-full" placeholder="This input has an error..." />
                            </div>

                            <div>
                                <label className="block text-primary font-medium mb-2">Textarea</label>
                                <textarea className="input w-full h-24 resize-none" placeholder="Enter multiple lines..."></textarea>
                            </div>
                        </div>
                    </section>

                    {/* Navigation */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Navigation</h2>
                        <div className="card">
                            <nav className="flex space-x-1">
                                <a href="#" className="nav-item nav-item-active">Home</a>
                                <a href="#" className="nav-item">About</a>
                                <a href="#" className="nav-item">Services</a>
                                <a href="#" className="nav-item">Contact</a>
                            </nav>
                        </div>
                    </section>

                    {/* Messages/Chat */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Messages</h2>
                        <div className="space-y-4">
                            <div className="message">
                                <p className="text-primary"><strong>System:</strong> Welcome to the chat interface!</p>
                            </div>

                            <div className="message-user">
                                <p className="text-primary"><strong>User:</strong> This is a user message with accent background.</p>
                            </div>

                            <div className="message-assistant">
                                <p className="text-primary"><strong>Assistant:</strong> This is an assistant response with subtle background.</p>
                            </div>
                        </div>
                    </section>

                    {/* Status Alerts */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Status Alerts</h2>
                        <div className="space-y-4">
                            <div className="alert-success">
                                <strong>Success!</strong> Your changes have been saved successfully.
                            </div>

                            <div className="alert-error">
                                <strong>Error!</strong> Something went wrong. Please try again.
                            </div>

                            <div className="alert-warning">
                                <strong>Warning!</strong> This action cannot be undone.
                            </div>

                            <div className="alert-info">
                                <strong>Info:</strong> Here's some helpful information for you.
                            </div>
                        </div>
                    </section>

                    {/* Interactive Elements */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Interactive Elements</h2>
                        <div className="card space-y-4">
                            <div>
                                <h3 className="text-primary font-semibold mb-2">Hover Effects</h3>
                                <div className="flex gap-2">
                                    <div className="hover-surface p-4 rounded cursor-pointer">
                                        <p className="text-primary">Hover Surface</p>
                                    </div>
                                    <div className="active-surface p-4 rounded cursor-pointer">
                                        <p className="text-primary">Active Surface</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Background Surfaces */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Background Surfaces</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-surface-elevated p-4 rounded border border-light">
                                <p className="text-primary font-medium">Elevated</p>
                                <p className="text-secondary text-sm">Highest level</p>
                            </div>

                            <div className="bg-surface p-4 rounded border border-light">
                                <p className="text-primary font-medium">Default</p>
                                <p className="text-secondary text-sm">Main surface</p>
                            </div>

                            <div className="bg-surface-subtle p-4 rounded border border-light">
                                <p className="text-primary font-medium">Subtle</p>
                                <p className="text-secondary text-sm">Subtle background</p>
                            </div>

                            <div className="bg-surface-muted p-4 rounded border border-light">
                                <p className="text-primary font-medium">Muted</p>
                                <p className="text-secondary text-sm">Most subtle</p>
                            </div>
                        </div>
                    </section>

                    {/* Borders */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Borders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-surface p-4 border-2 border-light rounded">
                                <p className="text-primary font-medium">Light Border</p>
                                <p className="text-secondary text-sm">Subtle separation</p>
                            </div>

                            <div className="bg-surface p-4 border-2 border-medium rounded">
                                <p className="text-primary font-medium">Medium Border</p>
                                <p className="text-secondary text-sm">Standard separation</p>
                            </div>

                            <div className="bg-surface p-4 border-2 border-strong rounded">
                                <p className="text-primary font-medium">Strong Border</p>
                                <p className="text-secondary text-sm">Emphasized separation</p>
                            </div>
                        </div>
                    </section>

                    {/* Accent Colors */}
                    <section>
                        <h2 className="text-primary text-2xl font-semibold mb-4">Accent Elements</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-accent text-white p-4 rounded">
                                <p className="font-medium">Accent Background</p>
                            </div>

                            <div className="bg-surface border-2 border-accent p-4 rounded">
                                <p className="text-accent font-medium">Accent Border</p>
                            </div>

                            <div className="bg-surface p-4 rounded border border-light">
                                <p className="text-accent font-medium">Accent Text</p>
                                <p className="text-secondary text-sm">With regular secondary text</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;
