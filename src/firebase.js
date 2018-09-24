import { initializeApp } from 'firebase';
import { config } from './env.js';

let app = initializeApp(config.firebase);

export const db = app.database();
export const namesRef = db.ref('shopping-list');