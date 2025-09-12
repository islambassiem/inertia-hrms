
import axios from 'axios';
import '@ant-design/v5-patch-for-react-19';

import { createInertiaApp  } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
