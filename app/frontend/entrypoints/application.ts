// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'

import createApp from '../App';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';

createApp();

console.log('Vite ⚡️ Rails');
